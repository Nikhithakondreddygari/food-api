import React from 'react';
import './Products.css';

const Products = ({ data }) => {
  return (
    <div className="products">
      {data.map((item, index) => (
        <div className="product-card" key={index}>
          <img className="product-image" src={item.recipe.image} alt={item.recipe.label} />
          <div className="product-details">
            <h5 className="product-title">{item.recipe.label}</h5>
            <p className="product-calories">Total Amount Of Calories: {Math.round(item.recipe.calories)}</p>
            <button className="btn-buy">Buy</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;