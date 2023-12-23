import { useEffect, useState } from 'react';
import Home from './Home';
import Cart from './components/Cart'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './index.css'
import bg from './assets/background.png';
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  const handleClick = () => {
  }

  const [url, setUrl] = useState('home');

  return (
    <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
      </Routes>
      
    </main>
  )
}