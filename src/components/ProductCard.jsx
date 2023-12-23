"use client";
import React, { useState, useEffect } from 'react';
import products from '../fakebackend';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackets, setSelectedPackets] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFirstItemAdded, setIsFirstItemAdded] = useState(false);

  useEffect(() => {
    // Check if the cart is empty when the component mounts
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setIsFirstItemAdded(existingCart.length === 0);
  }, []);

  const handleButtonClick = (product) => {
    // Display modal when a product is clicked
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    // Close the modal
    setShowModal(false);
  };

  const handleAddToCart = () => {
    // Add the selected product to the cart
    const cartItem = {
      name: selectedProduct.name,
      quantity: selectedPackets,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Show toast message
    toast('Added to cart Successfully', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: '#D1FAE5', color: '#000000' },
    });

    // Close the modal after adding to the cart
    setShowModal(false);
  };

  return (
    <div className="flex gap-3">
      {products.map((product, index) => (
        <div
          key={index}
          className="border flex-shrink-0 border-gray-300 p-4 rounded"
          onClick={() => handleButtonClick(product)}
        >
          {product.src && (
            <iframe
              title={product.name}
              allowFullScreen
              style={{ border: 'none', width: '250px', height: '250px' }}
              src={product.src}
            ></iframe>
          )}
          <strong className="font-bold">{product.name}</strong>
          <p>{/* ... (product description or other details) ... */}</p>
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <p className="font-bold mb-3">{selectedProduct.name}</p>
            <p className="font-bold mb-3">{selectedProduct.desc}</p>
            <p className="mb-3">Ingredients used: {selectedProduct.ingredient}</p>
            <div className="mb-4">
              <label htmlFor="packets" className="mr-2">
                No. of Packets:
              </label>
              <input
                id="packets"
                type="number"
                value={selectedPackets >= 0 ? selectedPackets : 0}
                onChange={(e) =>
                  setSelectedPackets(Math.max(0, Number(e.target.value)))
                }
              />
            </div>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default ProductCard;