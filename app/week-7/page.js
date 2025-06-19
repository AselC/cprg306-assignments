"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [sortOption, setSortOption] = useState("name");

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

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="container mx-auto max-w-5xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
          Shopping List
        </h1>

        {/* Controls Row */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
          >
            {showForm ? "Hide Form" : "Add New Item"}
          </button>
        </div>

        {/* Form */}
        {showForm && (
          <div className="mb-6">
            <NewItem onAddItem={handleAddItem} />
          </div>
        )}

        {/* Items List */}
        <ItemList
          items={items}
          sortBy={sortOption}
          onRemoveItem={handleRemoveItem}
        />
      </div>

      {/* Modal */}
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
