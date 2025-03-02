import React from "react";
import '../css/Categories.css'


export default function Categories() {

  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    if (window.confirm('Are you sure you want to log out?')) {
      window.location.href = '/'; // Redirect to the logout URL
    }
  };
  
  return (
<div>
    


<header>
        <nav>
          <ul>
             
            <li><a href="Navbar">Home</a></li>
            <li><a href="Products">Shop</a></li>
            <li><a href="#">Categories</a></li>
            
            
            <li><a href="Profile">Profile</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
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