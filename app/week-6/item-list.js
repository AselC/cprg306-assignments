"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onRemoveItem }) {
  const [sortBy, setSortBy] = useState("name");

  // Sort items
  const sortedItems = [...items].sort((a, b) =>
    a[sortBy]?.localeCompare(b[sortBy])
  );

  // Group items by category (only if "group" is selected)
  const groupedItems = {};
  if (sortBy === "group") {
    const grouped = [...items].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    grouped.forEach((item) => {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = [];
      }
      groupedItems[item.category].push(item);
    });
  }

  return (
    <div className="mt-6">
      {/* Sorting Dropdown */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Sort Items By:</label>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="w-full md:w-1/3 border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
          <option value="group">Group by Category</option>
        </select>
      </div>

      {/* Render Items */}
      {sortBy !== "group" ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onRemove={onRemoveItem}
            />
          ))}
        </ul>
      ) : (
        Object.keys(groupedItems)
          .sort()
          .map((category) => (
            <div key={category} className="mb-6">
              <div className="my-6">
                <div className="border-t border-gray-300 mb-2"></div>
                <h3 className="text-xl font-bold capitalize text-center">{category}</h3>
                <div className="border-t border-gray-300 mt-2"></div>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onRemove={onRemoveItem}
                  />
                ))}
              </ul>
            </div>
          ))
      )}
    </div>
  );
}
