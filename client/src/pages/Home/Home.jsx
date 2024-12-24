import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LoginModal from "../../components/Login/Login";
import SignUpModal from "../../components/SignUp/SignUp";
import Card from '../../components/Card/Card';
import { Toaster, toast } from "sonner";
import './Home.css';
import axios from 'axios';
import SellProduct from '../../components/SellProduct/SellProduct';

function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [isSellProductOpen, setIsSellProductOpen] = useState(false)

  const openLoginModal = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  const openSignUpModal = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  const openSellProductModal = () => {
    setIsSellProductOpen(true)
  }

  const closeSellProductModal = () => {
    setIsSellProductOpen(false)
  }

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get-products");
      console.log(response,'resssssssssspoooooooooo');
      setProducts(response.data.products);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };
  
  return (
    <>
      <Toaster position="top-center" />

      {isLoginOpen && (
        <LoginModal
          onClose={closeModals}
          onOpenSignUp={openSignUpModal}
          toast={toast}
        />
      )}

      {isSignUpOpen && (
        <SignUpModal
          onClose={closeModals}
          onOpenLogin={openLoginModal}
          toast={toast}
        />
      )}

      <Navbar toggleLoginModal={openLoginModal} openSellProductModal={openSellProductModal}/>

      {isSellProductOpen && (
        <SellProduct 
           onClose={closeSellProductModal}
           toast={toast}
           getProducts={getProducts}
        />
      )}



        
      {/* <div className="home-heading">
        <h1 className="heading-text">Fresh Recommendations</h1>
      </div> */}

      <div className="card-container">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product._id}
                image={product.image}
                title={product.name}
                price={product.price}
                description = {product.description}
                location={product.postedDate}
                productId={product._id}
                onClick={() => console.log('Product clicked', product)}
              />
            ))
          ) : (
            <p>No Product available</p>
          )}
        </div>


      <Footer />
    </>
  );
}

export default Home;
