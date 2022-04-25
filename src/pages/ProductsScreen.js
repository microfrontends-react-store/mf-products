import React, { useEffect, useState } from "react";
import { getProducts } from "@meli-store/api";
import { ProductCard } from "../components/ProductCard/ProductCard";

export const ProductsScreen = () => {
  const [products, setProdutcs] = useState([]);

  useEffect(() => {
    getProducts().subscribe((results) => {
      setProdutcs(results);
    });
  }, []);

  return (
    <section className="container">
      <div className="row row-cols-auto">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
