import { Element } from "react-scroll";
import ProductCard from "./ProductCard";


export default function Products() {
  return (
    <div className="flex flex-col items-center w-full mt-20">
      <p className="text-3xl font-bold mb-8 text-amber-600" style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 36 }}>Our Best Sellers</p>
      <Element id='products' className="flex w-full items-center justify-center overflow-x-auto hide-scrollbar">
        <div className="flex">
          <ProductCard />
        </div>
      </Element>
    </div>
  );
}
