import React from "react";
import '../css/Orderplaced.css'; // Importing the CSS file

export default function Orderplaced() {
  const home = () => {
    window.location.href = "http://localhost:5173/Navbar";
  };

  return (
    <div className="order-container">
      
      <div className="order-box">
        Thanks for shopping with us!
        <div className="checkmark">&#10004;</div>
        <h1 className="order-title">Awesome!</h1>
        <p className="order-message">
          Your order has been confirmed.
          <br />
          Check your email for details.
        </p>
        <button className="home-button" onClick={home}>
          Home
        </button>
      </div>
    </div>
  );
}
