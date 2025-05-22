export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-blue-100 border p-4 rounded-lg shadow-sm">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="italic text-gray-600">Category: {category}</p>
    </li>
  );
}
