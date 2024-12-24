import React,{ useContext, useState, useEffect  } from 'react';
import { Link  } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Navbar.css';
import OlxLogo from '../../assets/OlxLogo';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import { AuthContext } from '../../components/Context/AuthContext';
import jwt_decode from 'jwt-decode';

function Navbar({toggleLoginModal, openSellProductModal }) {
  
  const { user,logout  } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (user) {
      try {
        const decodedUser = jwt_decode(user); 
        const email = decodedUser?.email || null;
        setUserEmail(email);
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    }
  }, [user]);

  const userInitial = userEmail ? userEmail[0].toUpperCase() : null;

  const handleSellButtonClick = () => {
    if (user) {
      openSellProductModal(); 
    } else {
      toggleLoginModal(true) 
    }
  };
  
 
  // const stored = localStorage.getItem('user')
  // if(stored){
  //   const de = jwt_decode(stored)
  //   var email = de.email
    
  // }else {
  //   console.log('No user found in localStorage');
  // }
  

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          {/* OLX Logo */}
          <Link to="/" className="logo">
            <OlxLogo />
          </Link>

          {/* India Bar */}
          <div className="india-bar">
            <div className="search-icon-container">
              <FaSearch />
            </div>
            <input type="text" className="india-input" placeholder="India" />
            <div className="arrow-container">
              <Arrow />
            </div>
          </div>
        </div>

        {/* Center search bar */}
        <div className="navbar-center">
          <input
            type="text"
            className="search-bar"
            placeholder="Find items, services, etc."
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>

        {/* Right Section */}
        <div className="navbar-right">
          {/* Language Dropdown */}
          <div className="navbar-link language-dropdown">
            <span>ENGLISH</span>
            <Arrow />
          </div>

          {/* Login Button */}
          {user ? (
              <div className="user-profile-container">
                <button className="navbar-link login-btn">
                  {userInitial}
                </button>
                <div className="logout-btn-container">
                  <button
                    className="navbar-link logout-btn"
                    onClick={logout} // Call logout function when clicked
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button className="navbar-link login-btn" onClick={toggleLoginModal}>
                Login
              </button>
            )}



          {/* Sell Button */}
          <div className="navbar-link sell-btn" onClick={handleSellButtonClick}>
            <SellButton />
          </div>
        </div>
      </nav>
      <div className="categories-container">
        <ul className="categories-list">
        <li className="category-title">All Categories </li>
          <li className="category-item">Cars</li>
          <li className="category-item">Motorcycles</li>
          <li className="category-item">Mobile Phones</li>
          <li className="category-item">For Sale: Houses & Apartments</li>
          <li className="category-item">Scooters</li>
          <li className="category-item">Commercial & Other Vehicles</li>
          <li className="category-item">For Rent: Houses & Apartments</li>
        </ul>
      </div>

    </>
  );
}

export default Navbar;
