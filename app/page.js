'use client'

import { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const smoothScrollTo = (targetId) => {
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    window.scrollTo(targetElement, {
      behavior: 'smooth',
      smooth: true,
      duration: 800,
    });
  }
};

export default function App() {

  return (
    <main className="">
      <div className="fixed w-screen h-14">
        <div className='bg-green-200 lg:w-1/2 md:w-3/4 sm:w-3/4 lg:h-14 md:h-14 sm:h-14'>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="products"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Products
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <Element name="home">
        <Home />
      </Element>
      <Element name="products">
        <Products />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </main>
  )
}
