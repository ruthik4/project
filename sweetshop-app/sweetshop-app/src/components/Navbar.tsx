
import React from 'react';
import '../css/Navbar.css';
import '../components/Products';


export default function Navbar() {


  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    if (window.confirm('Are you sure you want to log out?')) {
      window.location.href = '/'; // Redirect to the logout URL
    }
  };
  return (
    <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
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

      <main className="main-content">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Sweet Delights!</h1>
            <p>Discover our signature sweets and seasonal promotions</p>
            <a href="Products" className="cta-button">Shop Now</a>
          </div>
        </section>
      </main>
      <br/><br/><br/><br/><br/><br/><br/>

      <footer>
        <div className="footer-content">
          <p>© 2025 Sweet Delights. All rights reserved.</p>
          <ul className="social-icons">
            <li><a href="#" target="_main">Facebook</a></li>
            <li><a href="#" target="_main">Twitter</a></li>
            <li><a href="https://www.instagram.com/nandu_m360?igsh=MTFyZDg2OXhxYmMyeg==" target="_main">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}