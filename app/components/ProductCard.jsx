'use-client';
import React, { useState } from 'react'; 
import products from "../fakebackend";
import { useRouter } from 'next/navigation'

const ProductCard = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const [selectedPackets, setSelectedPackets] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleButtonClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = () => {
    const cartItem = {
      name:selectedProduct.name,
      quantity:selectedPackets
    }
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = [...existingCart,cartItem]

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    setShowModal(false);

  };

  return (
    <div className="flex gap-3">
      {products.map((product, index) => (
        <div key={index} className="border flex-shrink-0 border-gray-300 p-4 rounded">
          {product.src && (
            <iframe
              title={product.name}
              allowFullScreen
              style={{ border: "none", width: "250px", height: "250px" }}
              src={product.src}
            ></iframe>
          )}
          <strong className="font-bold">{product.name}</strong>
          <p>{}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
            onClick={() => handleButtonClick(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded">
            <p className="font-bold mb-3">{selectedProduct.name}</p>
            <p className="font-bold mb-3">{selectedProduct.desc}</p>
            <p className="mb-3">Ingrediants used :{selectedProduct.ingredient}</p>
            <div className="mb-4">
              <label htmlFor="packets" className="mr-2">No. of Packets:</label>
              <input
                id="packets"
                type="number"
                value={selectedPackets >= 0 ? selectedPackets : 0}
                onChange={(e) => setSelectedPackets(Math.max(0, Number(e.target.value)))}
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
    </div>
  );
};

export default ProductCard;
