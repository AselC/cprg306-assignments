"use client";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("");
  }

  function increment() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto p-6 bg-gray-50 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-center text-blue-700 flex items-center justify-center gap-2">
        <ShoppingCart className="w-6 h-6" />
        Add New Item
      </h2>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g., Cheese"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Quantity</label>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-3 py-1 bg-red-500 text-white rounded disabled:bg-gray-400"
          >
            -
          </button>
          <span className="text-lg font-medium text-center w-[40px]">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-3 py-1 bg-green-500 text-white rounded disabled:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        >
          <option value="" disabled>
            -- Select a category --
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add Item
      </button>
    </form>
  );
}
