import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './index.css'
import bg from './assets/background.png';

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
    const navigate = useNavigate();
    const [cart, setCart] = useState(false);

    useEffect(() => {
        const cartItem = localStorage.getItem('cart');
        if (cartItem) setCart(true);
        else setCart(false);
    }, [localStorage.getItem('cart')])
    const handleClick = () => {
        navigate('/cart');
    }



    const [url, setUrl] = useState('home');

    return (
        <main className="bg-fixed bg-amber-100 bg-opacity-10 bg-no-repeat" style={{ background: '#fef3c7', backgroundRepeat: 'repeat', backgroundSize: 'contain', backgroundAttachment: 'fixed' }}>
            <div className="fixed z-50 w-screen flex-1 h-14 flex justify-center mt-5">
                <div className='bg-amber-100 flex items-center lg:w-1/2 md:w-3/4 sm:w-3/4 w-3/4 h-14 rounded-full shadow-md'>
                    <div className='flex flex-1 justify-evenly items-center'>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('home')}
                        >
                            <div className='flex self-center cursor-pointer' style={{ background: url === 'home' ? '#d97706' : 'transparent', padding: 8, borderRadius: 25, color: url === 'home' ? 'white' : 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>Home</p>
                            </div>
                        </Link>
                        <Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('products')}
                        >
                            <div className='flex items-center cursor-pointer' style={{ background: url === 'products' ? '#d97706' : 'transparent', padding: 8, borderRadius: 25, color: url === 'products' ? 'white' : 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>Products</p>
                            </div>
                        </Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('about')}
                        >
                            <div className='flex items-center cursor-pointer' style={{ background: url === 'about' ? '#d97706' : 'transparent', padding: 8, borderRadius: 25, color: url === 'about' ? 'white' : 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>About</p>
                            </div>
                        </Link>
                        <Link
                            activeClass="active"
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            onClick={() => setUrl('footer')}
                        >
                            <div className='flex items-center cursor-pointer' style={{ background: url === 'footer' ? '#d97706' : 'transparent', padding: 8, borderRadius: 25, color: url === 'footer' ? 'white' : 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: 18 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataslot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                </svg>
                                <p className='hidden lg:flex md:hidden sm:hidden'>Contact Us</p>
                            </div>
                        </Link>
                        <div className="cursor-pointer flex items-center" onClick={() => handleClick()}>
                            <div className="relative">
                                <div className="rounded-full h-8 w-8 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </div>
                                {cart && <span className="absolute w-3 h-3 top-0 right-0 bg-amber-600 text-white rounded-full px-1"></span>}
                            </div>
                        </div>
                    </div>
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