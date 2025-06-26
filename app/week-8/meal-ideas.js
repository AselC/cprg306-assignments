"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealDetails, setMealDetails] = useState([]);

  // Fetch meals 
  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      setSelectedMeal(null);
      return;
    }

    async function fetchMealIdeas() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
        setSelectedMeal(null);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
        setMeals([]);
      }
    }

    fetchMealIdeas();
  }, [ingredient]);

  // Fetch meal details 
  async function fetchMealDetails(mealId) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        const meal = data.meals[0];

        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = meal[`strIngredient${i}`];
          const measure = meal[`strMeasure${i}`];
          if (ingredient && ingredient.trim()) {
            ingredients.push(`${ingredient} - ${measure}`);
          }
        }

        setSelectedMeal(meal.strMeal);
        setMealDetails(ingredients);
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
      setMealDetails([]);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">
        Meal Ideas for "{ingredient}"
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-600">No meal ideas found.</p>
      ) : (
        <div className="h-[320px] overflow-y-scroll pr-2">
          <ul className="grid grid-cols-2 gap-4">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
                onClick={() => fetchMealDetails(meal.idMeal)}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="font-medium text-sm">{meal.strMeal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedMeal && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Ingredients for {selectedMeal}
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {mealDetails.map((detail, index) => (
              <li
                key={index}
                className="bg-orange-50 border border-red-200 p-2 rounded text-sm text-gray-700"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
