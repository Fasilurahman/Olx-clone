import React,{ useEffect, useState } from "react";
import "./ProductDetails.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {

  const { productId } = useParams();  
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const onBack = () => navigate(-1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product/${productId}`);
        setProduct(response.data.product);
      } catch (error) {
        console.log('Error fetching product details:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }



  return (
    <div className="product-details-container">
      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        &#8592; Back
      </button>

      <div className="product-content">
        {/* Product Image */}
        <div className="product-image">
          <img src={`/images/${product.image}`} alt={product.title} />
        </div>

        {/* Product Details */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-price">₹{product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-description">{product.condition}</p>

          {/* Seller Information */}
          <div className="seller-info">
            <h3>Seller Information</h3>
            <p>Contact: {product.contactNumber}</p>
          </div>

          {/* Buy Now Button */}
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
