import React, { createContext, useState, ReactNode } from 'react';
import { Product } from '../interfaces/Product';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCart(prevCart => [...prevCart, { ...product, quantity }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
