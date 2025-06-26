"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [sortOption, setSortOption] = useState("name");
  const [selectedItemName, setSelectedItemName] = useState("");
  const [showMealIdeas, setShowMealIdeas] = useState(true);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
    setFeedbackMessage(`Item "${newItem.name}" added.`);
    setIsMessageVisible(true);
  }

  function handleRemoveItem(id) {
    const removed = items.find((item) => item.id === id);
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (removed) {
      setFeedbackMessage(`Item "${removed.name}" removed.`);
    } else {
      setFeedbackMessage("Item removed.");
    }
    setIsMessageVisible(true);
  }

  function handleItemSelect(itemName) {
    const cleanedName = itemName
      .replace(/,.*$/, "")
      .replace(/[^a-zA-Z ]/g, "")
      .trim()
      .toLowerCase();

    console.log("Searching recipes for:", cleanedName);
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-gray-100 py-16 px-10">
      <div className="container mx-auto max-w-[1500px] bg-white shadow-lg rounded-lg p-12 flex flex-col gap-6 min-h-[500px]">

        {/* Controls Row */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex gap-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="category">Sort by Category</option>
              <option value="group">Group by Category</option>
            </select>

            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="ml-100 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
            >
              {showForm ? "Hide Form" : "Add New Item"}
            </button>
          </div>

          <button
            onClick={() => setShowMealIdeas((prev) => !prev)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            {showMealIdeas ? "Hide Meal Ideas" : "Show Meal Ideas"}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 flex-1">

          {/* Left Column */}
          <div className="flex-1 flex flex-col items-center">
            {/* Centered Header */}
            <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center w-full">
              Shopping List
            </h1>

            {showForm && (
              <div className="mb-6">
                <NewItem onAddItem={handleAddItem} />
              </div>
            )}

            <div className="flex-1 overflow-y-auto max-h-[700px] border-t pt-4 w-full">
              <ItemList
                items={items}
                sortBy={sortOption}
                onRemoveItem={handleRemoveItem}
                onItemSelect={handleItemSelect}
              />
            </div>
          </div>

          {/* Right Column */}
          {showMealIdeas && (
            <div className="flex-1 flex flex-col mt-1">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          )}
        </div>
      </div>

      {isMessageVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
            <p className="text-lg font-semibold mb-4">{feedbackMessage}</p>
            <button
              onClick={() => setIsMessageVisible(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
