import React from 'react';
import Navbar from '../components/Navbar';
import { Product } from '../interfaces/Product';

interface CartProps {
  cart: Product[];
}

const Cart: React.FC<CartProps> = ({ cart }) => {
  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
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
            <li><a href="Cart">Cart</a></li>
            <li><a href="Profile">Profile</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
            <li><a href="Contactus">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <section className="h-100">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0">Shopping Cart</h3>
                <div>
                  <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                </div>
              </div>
              {cart.map((product, index) => (
                <div className="card rounded-3 mb-4" key={index}>
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img src={product.productimage || 'https://via.placeholder.com/500x200'} className="img-fluid rounded-3" alt={product.productname} />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{product.productname}</p>
                        <p><span className="text-muted">Quantity: </span>{product.quantity}</p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">₹{product.productprice}/kg</h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="card mb-4">
                <div className="card-body p-4 d-flex flex-row">
                  <div className="form-outline flex-fill">
                    <input type="text" id="form1" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form1">Discount code</label>
                  </div>
                  <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
