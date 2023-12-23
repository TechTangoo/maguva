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
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setIsFirstItemAdded(existingCart.length === 0);
  }, []);

  const handleButtonClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    const cartItem = {
      name: selectedProduct.name,
      quantity: selectedPackets,
    };

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

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

    setShowModal(false);
  };

  return (
    <div className="flex gap-3">
      {products.map((product, index) => (
        <div
          key={index}
          className="border flex-shrink-0 border-gray-300 p-4 rounded cursor-pointer shadow-xl transition duration-300"
          onClick={() => handleButtonClick(product)}
        >
          {product.src && (
            <img
              src={product.src}
              alt={product.name}
              className="mb-2 rounded-md"
              style={{ maxWidth: '100%', maxHeight: '300px', height: 'auto' }}
            />
          )}
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-amber-600" style={{fontWeight: 800, fontFamily:'Nunito, sans-serif', fontSize: 30}}>{selectedProduct.name}</h2>
              <div onClick={handleModalClose} className='cursor-pointer text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg></div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                {selectedProduct.iframelink && (
                  <iframe
                    title=""
                    allowFullScreen
                    style={{ border: 'none', width: '500px', height: '500px' }}
                    src={selectedProduct.iframelink}
                  />
                )}
              </div>
              <div className="flex flex-col">
                <p className="font-bold mb-3 text-amber-700" style={{ fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 24 }}>Health Benefits</p>
                <ul className="list-disc pl-4 mb-3">
                  {selectedProduct.health.split(',').map((benefit, index) => (
                    <li key={index} style={{ fontWeight: 600, fontFamily: 'Nunito, sans-serif', fontSize: 18}}>{benefit.trim()}</li>
                  ))}
                </ul>
                <p className="mb-3" style={{ fontWeight: 600, fontFamily: 'Nunito, sans-serif', fontSize: 18 }}>Ingredients used: {selectedProduct.ingredient}</p>
                <label htmlFor="packets" className="mr-2 text-amber-700" style={{ fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 20 }}>
                  No. of Packets:
                </label>
                <input
                  id="packets"
                  type="number"
                  value={selectedPackets >= 0 ? selectedPackets : 0}
                  onChange={(e) =>
                    setSelectedPackets(Math.max(0, Number(e.target.value)))
                  }
                  className="border px-2 py-1 mb-3"
                />
                <button
                  className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-700"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
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
