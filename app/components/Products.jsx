// Products.js
import { Element } from "react-scroll";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-2xl font-bold mb-4">Our Products</p>
      <Element id='products' className="flex w-full items-center justify-center p-24">
        <div className="flex overflow-x-auto scrollbar-hide">
          <ProductCard />
        </div>
      </Element>
    </div>
  );
}
