import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ image, title, price,postedDate, onClick, description ,productId }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${productId}`);
  };

  

  return (
    <div className="card" onClick={handleClick}>
      <img src={`/images/${image}`} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{description}</p>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;
