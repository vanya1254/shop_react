import React from "react";

export const Categories = () => {
  const categoriesList = [
    { subtitle: "30% Off", title: "For women" },
    { subtitle: "Hot Deal", title: "For men" },
    { subtitle: "New Arrivals", title: "For kids" },
    { subtitle: "Luxirous & Trendy", title: "Accesories" },
  ];

  return (
    <div className="categories center">
      {categoriesList.map((category, i) => (
        <div
          key={i}
          className={`category img-bg${i + 1} ${i + 1 == 4 && "long"}`}
        >
          <article className="category-content">
            <h4 className="subtitle">{category.subtitle}</h4>
            <h3 className="title">{category.title}</h3>
          </article>
        </div>
      ))}
    </div>
  );
};
