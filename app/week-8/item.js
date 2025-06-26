"use client";
import { useState } from "react";

export default function Item({ id, name, quantity, category, onRemove, onSelect }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <li
      key={id}
      onClick={() => onSelect(name)}
      className="bg-blue-100 p-4 rounded shadow cursor-pointer hover:bg-blue-200 transition relative"
    >
      <div className="font-bold mb-1">{name}</div>
      <div>Quantity: {quantity}</div>
      <div className="italic text-gray-600">Category: {category}</div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent triggering onSelect
          setShowConfirm(true);
        }}
        className="text-red-600 mt-2 flex items-center gap-1"
      >
        <span role="img" aria-label="delete">🗑️</span>
        Remove
      </button>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete "{name}"?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  onRemove(id);
                  setShowConfirm(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
