import React, { useState, useEffect } from 'react';
import products from '../fakebackend';
import toast, { Toaster } from 'react-hot-toast';
import ConfettiComponent from './Confetti';

const ProductCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackets, setSelectedPackets] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFirstItemAdded, setIsFirstItemAdded] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);


  const handleButtonClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    console.log('selectedPackets', selectedProduct)
    const cartItem = {
      name: selectedProduct.name,
      quantity: selectedPackets,
      src: selectedProduct.src,
      price: selectedProduct.price
    };
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setIsFirstItemAdded(existingCart.length === 0);

    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    toast.success('Added to cart Successfully');
    setShowModal(false);
  };

  useEffect(() => {
    if (isFirstItemAdded) {
      handleClick();
    }
  }, [isFirstItemAdded])

  const handleClick = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 3000); // Reset confetti after 2 seconds
    setIsFirstItemAdded(false)
  };

  return (
    <div className="flex gap-3">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ConfettiComponent active={confettiActive} />
      {products.map((product, index) => (
        <div
          key={index}
          className="border bg-white flex-shrink-0 border-gray-300 p-4 rounded cursor-pointer shadow-xl transition duration-300"
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
        <div className="fixed overflow-scroll inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-wrap z-50">
          <div className="bg-white p-6 rounded w-3/4 lg:w-2/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-xl text-amber-600" style={{ fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 30 }}>{selectedProduct.name}</h2>
              <div onClick={handleModalClose} className='cursor-pointer text-2xl'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg></div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 flex-wrap">
              <div className="flex-1 h-full">
                {selectedProduct.iframelink && (
                  <iframe
                    title=""
                    allowFullScreen
                    className='min-h-80 max-h-full'
                    style={{ border: 'none', width: '100%' }}
                    src={selectedProduct.iframelink}
                  />
                )}
              </div>
              <div className="flex flex-col flex-1">
                <p className="font-bold mb-3 text-amber-700" style={{ fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 24 }}>Health Benefits</p>
                <ul className="list-disc pl-4 mb-3">
                  {selectedProduct.health.split(',').map((benefit, index) => (
                    <li key={index} style={{ fontWeight: 600, fontFamily: 'Nunito, sans-serif', fontSize: 18 }}>{benefit.trim()}</li>
                  ))}
                </ul>
                <p className="mb-3" style={{ fontWeight: 600, fontFamily: 'Nunito, sans-serif', fontSize: 18 }}>Ingredients used: {selectedProduct.ingredient}</p>
                <div className='flex items-center mb-5'>
                  <label htmlFor="packets" className="mr-2 text-amber-700" style={{ fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 20 }}>
                    No. of Packets:
                  </label>

                  <button className="bg-red-700 hover:bg-red-600 p-1 rounded" onClick={() => selectedPackets > 1 ? setSelectedPackets(selectedPackets - 1) : null}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </button>
                  <input
                    id="packets"
                    type="number"
                    value={selectedPackets >= 1 ? selectedPackets : 1}
                    onChange={(e) => {
                      if (parseInt(e.target.value) >= 1) setSelectedPackets(Math.max(1, Number(e.target.value)))
                    }
                    }
                    className="p-1 w-16"
                  />
                  <button className="bg-green-700 hover:bg-green-600 p-1 rounded" onClick={() => setSelectedPackets(selectedPackets + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
                <label htmlFor="packets" className="mr-2 text-amber-700 mb-2" style={{ fontWeight: 800, fontFamily: 'Nunito, sans-serif', fontSize: 20 }}>
                   {" "} Net Wt: <span className='text-black'>250gm</span>
                  </label>
                <div className='flex gap-4 items-center  mb-10'><p className='text-xl text-amber-700' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>Total cost: </p> <p style={{ fontFamily: 'Nunito, sans-serif', fontSize: 20 }}>₹ {selectedPackets * parseInt(selectedProduct.price)}</p></div>
                <div className='flex flex-1 justify-center'>
                  <button
                    className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 w-1/2"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
