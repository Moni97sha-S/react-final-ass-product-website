import React from "react";
import ProductCategoriesList from "./ProductCategoriesList";
import ProductsList from "./ProductsList";
import "../../styles/Products.css";

function Products() {
  return (
    <div className="container">
      <ProductsList />
      <ProductCategoriesList />
    </div>
  );
}

export default Products;
