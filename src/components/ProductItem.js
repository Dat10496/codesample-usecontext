import React from "react";

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h5 className="title">{product.name}</h5>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
