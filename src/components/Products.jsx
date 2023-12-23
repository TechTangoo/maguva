import { Element } from "react-scroll";
import ProductCard from "./ProductCard";


export default function Products() {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-3xl font-bold mb-8 text-gray-800">Our Products</p>
      <Element id='products' className="flex w-full items-center justify-center overflow-x-auto hide-scrollbar">
        <div className="flex">
          <ProductCard />
        </div>
      </Element>
    </div>
  );
}
