"use client";
import { Trash2 } from "lucide-react";

export default function Item({ id, name, quantity, category, onRemove }) {
  return (
    <li className="bg-blue-100 border rounded p-4">
      <div className="font-semibold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div className="italic text-gray-600">Category: {category}</div>
      <button
        onClick={() => onRemove(id)}
        className="mt-2 flex items-center text-red-600 hover:text-red-800"
      >
        <Trash2 className="w-4 h-4 mr-1" />
        Remove
      </button>
    </li>
  );
}
