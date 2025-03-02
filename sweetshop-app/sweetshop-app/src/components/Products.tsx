import React, { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product';
import Navbar from '../components/Navbar';
import '../css/Products.css';
import Cart from './Cart';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);





  const handleLogout = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    if (window.confirm('Are you sure you want to log out?')) {
      window.location.href = '/'; // Redirect to the logout URL
    }
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        const initialQuantities: { [key: string]: number } = {};
        data.forEach(product => {
          initialQuantities[product.productname] = 1;
        });
        setQuantities(initialQuantities);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  const handleQuantityChange = (
    productName: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Math.max(1, Number(event.target.value));
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productName]: value,
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.productname];
    setCart(prevCart => [
      ...prevCart,
      { ...product, quantity }
    ]);
    console.log(`Added ${quantity} of ${product.productname} to cart.`);
  };

  if (loading) {
    return (
      <div className="loadingicon">
        <img
          src="https://t4.ftcdn.net/jpg/03/21/10/93/360_F_321109344_wx3HIqiBwBusmPl6lXnWXiVpbj3191sw.jpg"
          width={200}
          alt="Loading..."
        />
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (











    <div className="d-flex flex-column min-vh-100">



<header>
        <nav>
          <ul>
             
            <li><a href="Navbar">Home</a></li>
            <li><a href="Products">Shop</a></li>
            <li><a href="Categories">Categories</a></li>
            <li><a href="#">Cart</a></li>
            
            <li><a href="Profile">Profile</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
            <li><a href="Contactus">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      
      <div className="products-section flex-grow-1">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="container py-5">
          <div className="row justify-content-center">
            {products.map(product => (
              <div className="col-12 col-md-6 col-lg-4 px-2" key={product.productname}>
                <div className="card h-100">
                  <img
                    src={
                      product.productimage ||
                      'https://via.placeholder.com/500x200'
                    }
                    className="card-img-top"
                    alt={product.productname}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.productname}</h5>
                    <p className="card-text">{product.productdescription}</p>
                    <p className="card-price mt-auto">
                      ₹{product.productprice}/kg
                    </p>
                    <div className="quantity-container d-flex align-items-center mt-3">
                      <input
                        type="number"
                        min="1"
                        value={quantities[product.productname]}
                        onChange={e =>
                          handleQuantityChange(product.productname, e)
                        }
                        className="quantity-input form-control me-2"
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cart cart={cart} />

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>© 2025 Sweet Delights. All rights reserved.</p>
          <ul className="social-icons">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/nandu_m360?igsh=MTFyZDg2OXhxYmMyeg==" target='_main'>Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}