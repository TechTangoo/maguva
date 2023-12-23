
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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
      <div className='flex flex-1 items-center justify-between'>
        <div onClick={() => navigate(-1)} className='flex text-amber-800 bg-amber-100 p-3 rounded-3xl cursor-pointer hover:bg-amber-200'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Go back
        </div>
        <h1 className="text-3xl text-amber-500 font-bold mb-6" style={{fontFamily:'Nunito,sans-serif', fontWeight: 800, fontSize: 28}}>Your Cart</h1>
        <div></div>
      </div>
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
