import React, { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product';
import Navbar from '../components/Navbar';
import '../css/Products.css';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [cart, setCart] = useState<(Product & { quantity: number })[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState<{ [key: string]: boolean }>({});

  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to log out?')) {
      window.location.href = '/';
    }
  };



  const handleOrder = () => {
    
    event.preventDefault(); // Prevent the default anchor behavior
    if (window.confirm('Confirm Order')) {
      window.location.href = '/Orderplaced'; // Redirect to the logout URL
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

  const handleQuantityChange = (productName: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(event.target.value));
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productName]: value,
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.productname];
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productname === product.productname);
      if (existingItem) {
        return prevCart.map(item =>
          item.productname === product.productname
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    setAddedToCart(prevState => ({ ...prevState, [product.productname]: true }));
    setTimeout(() => {
      setAddedToCart(prevState => ({ ...prevState, [product.productname]: false }));
    }, 2000);
  };

  const handleCartQuantityChange = (productName: string, change: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.productname === productName
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleCartQuantityInput = (productName: string, value: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.productname === productName
          ? { ...item, quantity: Math.max(1, value) }
          : item
      )
    );
  };

  const handleRemoveFromCart = (productName: string) => {
    setCart(prevCart => prevCart.filter(item => item.productname !== productName));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.quantity * item.productprice, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
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

      {/* Products Section */}
      <div className="products-section flex-grow-1">
        <div className="container py-5">
          <div className="row justify-content-center">
            {products.map(product => (
              <div className="col-12 col-md-6 col-lg-4 px-2" key={product.productname}>
                <div className="card h-100">
                  <img
                    src={
                      product.productimage || 'https://via.placeholder.com/500x200'
                    }
                    className="card-img-top"
                    alt={product.productname}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.productname}</h5>
                    <p className="card-text">{product.productdescription}</p>
                    <p className="card-price mt-auto">₹{product.productprice}/kg</p>
                    <div className="quantity-container d-flex align-items-center mt-3">
                      <input
                        type="number"
                        min="1"
                        value={quantities[product.productname]}
                        onChange={e => handleQuantityChange(product.productname, e)}
                        className="quantity-input form-control me-2"
                      />
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(product)}
                        disabled={addedToCart[product.productname]}
                      >
                        {addedToCart[product.productname] ? '✔ Added to cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="cart-section container py-3">
          <h2>Cart</h2>
          <ul className="cart-items list-group">
            {cart.map(item => (
              <li key={item.productname} className="cart-item list-group-item d-flex align-items-center">
                <img
                  src={item.productimage || 'https://via.placeholder.com/60'}
                  alt={item.productname}
                  className="cart-item-image"
                />
                <div className="item-details">
                  <h3 className="item-name">{item.productname}</h3>
                  <p className="item-price">₹{item.productprice} x {item.quantity}</p>
                </div>
                <div className="item-actions ms-auto d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => handleCartQuantityChange(item.productname, -1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleCartQuantityInput(
                        item.productname,
                        parseInt(e.target.value) || 1
                      )
                    }
                    className="quantity-input form-control me-2"
                  />
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => handleCartQuantityChange(item.productname, 1)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveFromCart(item.productname)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h4>Total Amount: ₹{totalAmount}</h4>
            <button className="btn btn-success mt-2" onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}
    </div>
  );
}
