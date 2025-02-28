import React from "react";
import '../css/Categories.css'

export default function Categories() {
  return (
<div>
    


<header>
        <nav>
          <ul>
            <li><a href="Navbar">Home</a></li>
            <li><a href="Products">Shop</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="Contactus">Contact Us</a></li>
          </ul>
        </nav>
      </header>






    <div className="contact-container">
   <p> <h5>We are actively expanding our product categories. We appreciate your patience as we introduce a wider selection of items in the near future.</h5></p>

      {/* Footer */}
      <div className="footer-content">
        <p>© 2025 Sweet Delights. All rights reserved.</p>
      </div>
    </div>
    </div>//last div
  );
}
