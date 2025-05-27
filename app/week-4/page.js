import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Add New Item</h1>
      <NewItem />
    </main>
  );
}
