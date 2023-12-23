import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const handleIncreaseQuantity = (itemName) => {
    const itemIndex = cartItems.findIndex((item) => item.name === itemName);
    const updatedItems = [...cartItems];

    if (itemIndex !== -1) {
      updatedItems[itemIndex].quantity += 1;
      updateCart(updatedItems);
    }
  };

  const handleDecreaseQuantity = (itemName) => {
    const itemIndex = cartItems.findIndex((item) => item.name === itemName);
    const updatedItems = [...cartItems];

    if (itemIndex !== -1 && updatedItems[itemIndex].quantity > 1) {
      updatedItems[itemIndex].quantity -= 1;
      updateCart(updatedItems);
    }
  };

  const handleDeleteItem = (itemName) => {
    const updatedItems = cartItems.filter((item) => item.name !== itemName);
    updateCart(updatedItems);
  };

  const generateWhatsAppMessage = () => {
    const groupedItems = {};

    // Group items by name
    cartItems.forEach((item) => {
      if (groupedItems[item.name]) {
        groupedItems[item.name].quantity += item.quantity;
      } else {
        groupedItems[item.name] = { ...item };
      }
    });

    const message = Object.values(groupedItems).map((groupedItem) => {
      return `${groupedItem.name} 
      no.of packets: ${groupedItem.quantity}`;
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
    <div className="w-screen h-screen bg-amber-100">
      <div className='flex flex-1 items-center justify-between'>
        <div onClick={() => navigate(-1)} className='flex text-amber-800 bg-amber-100 p-3 rounded-3xl cursor-pointer hover:bg-amber-200'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
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
        {Object.values(cartItems.reduce((accumulator, item) => {
          accumulator[item.name] = accumulator[item.name] || { quantity: 0, name: item.name };
          accumulator[item.name].quantity += item.quantity;
          return accumulator;
        }, {})).map((groupedItem, index) => (
          <li key={index} className="mb-2">
            <strong>{groupedItem.name}</strong> - Quantity: {groupedItem.quantity}{' '}
            <button
              className="ml-2 text-blue-500"
              onClick={() => handleIncreaseQuantity(groupedItem.name)}
            >
              +
            </button>{' '}
            <button
              className="ml-2 text-blue-500"
              onClick={() => handleDecreaseQuantity(groupedItem.name)}
            >
              -
            </button>{' '}
            <button
              className="ml-2 text-red-500"
              onClick={() => handleDeleteItem(groupedItem.name)}
            >
              Delete
            </button>
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
