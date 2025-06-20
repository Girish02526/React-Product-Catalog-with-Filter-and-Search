import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text text-muted">{product.category}</p>
          <p className="card-text fw-bold">₹{product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
