import React from 'react'; 
import products from "../fakebackend";

const ProductCard = () => {
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
          <p>{product.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;