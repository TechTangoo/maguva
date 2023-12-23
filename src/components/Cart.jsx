
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const generateWhatsAppMessage = () => {
    const message = cartItems.map((item) => {
      return `${item.name} 
      no.of packets :${item.quantity}`;
    });
    return message.join('\n');
  };

  const whatsappMessage = `https://wa.me/918247036610?text=${encodeURIComponent(
    generateWhatsAppMessage()
  )}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappMessage, '_blank');
  };

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="mb-4">
        <button
          className="bg-amber-500 text-white px-4 py-2 rounded mr-4"
          onClick={handleWhatsAppClick}
        >
          WhatsApp Me
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <ul className="list-disc pl-6">
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.name}</strong> - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link to="/" className="text-blue-500">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
