"use client";
import Item from "./item";

export default function ItemList({ items, sortBy, onRemoveItem }) {
  const sortedItems = [...items].sort((a, b) =>
    a[sortBy]?.localeCompare(b[sortBy])
  );

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
    <div className="mt-4">
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
                <div className="border-t border-gray-300 mb-2" />
                <h3 className="text-xl font-bold capitalize text-center">
                  {category}
                </h3>
                <div className="border-t border-gray-300 mt-2" />
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
