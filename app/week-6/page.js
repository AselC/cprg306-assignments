import ItemList from "./item-list";
import { ShoppingCart } from "lucide-react";


export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2 text-blue-700">
        <ShoppingCart className="w-6 h-6" />
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}

