import React from "react";
import '../css/Contactus.css'


export default function Contact() {


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
            <li><a href="Categories">Categories</a></li>
           
            
            <li><a href="Profile">Profile</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
            <li><a href="Contactus">Contact Us</a></li>
          </ul>
        </nav>
      </header>






    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>Get in touch with us through the following platforms:</p>

      <ul className="contact-list">
        <li>
          <i className="fab fa-instagram"></i>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://www.instagram.com/nandu_m360"
            target="_blank"
            rel="noopener noreferrer"
          >
            @nandu_m360
          </a>
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <strong>Gmail:</strong>{" "}
          <a href="mailto:22bk1a1269@stpetershyd.com">22bk1a1269@stpetershyd.com</a>
        </li>
        <li>
          <i className="fab fa-twitter"></i>
          <strong>Linkedin:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/mende-nandu-058595259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_main"
            rel="noopener noreferrer"
          >
            Mende Nandu
          </a>
        </li>
      </ul>

      {/* Footer */}
      <div className="footer-content">
        <p>© 2025 Sweet Delights. All rights reserved.</p>
      </div>
    </div>
    </div>//last div
  );
}