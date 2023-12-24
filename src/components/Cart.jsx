import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateCart = (updatedItems) => {
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const handleIncreaseQuantity = (itemName) => {
    const itemIndex = cartItems.findIndex((item) => item.name === itemName);
    const updatedItems = [...cartItems];

    if (itemIndex !== -1) {
      updatedItems[itemIndex].quantity += 1;
      updateCart(updatedItems);
    }
  };

  const handleDecreaseQuantity = (itemName) => {
    const itemIndex = cartItems.findIndex((item) => item.name === itemName);
    const updatedItems = [...cartItems];

    if (itemIndex !== -1 && updatedItems[itemIndex].quantity > 1) {
      updatedItems[itemIndex].quantity -= 1;
      updateCart(updatedItems);
    }
  };

  const handleDeleteItem = (itemName) => {
    const updatedItems = cartItems.filter((item) => item.name !== itemName);
    updateCart(updatedItems);
  };

  const generateWhatsAppMessage = () => {
    const groupedItems = {};

    // Group items by name
    cartItems.forEach((item) => {
      if (groupedItems[item.name]) {
        groupedItems[item.name].quantity += item.quantity;
      } else {
        groupedItems[item.name] = { ...item };
      }
    });

    const message = Object.values(groupedItems).map((groupedItem) => {
      return `${groupedItem.name} 
      no.of packets: ${groupedItem.quantity}`;
    });

    return message.join('\n');
  };

  const whatsappMessage = `https://wa.me/918247036610?text=${encodeURIComponent(
    generateWhatsAppMessage()
  )}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappMessage, '_blank');
  };

  const handleCheckout = () => {
    setShowModal(true);
  }

  const handleClearCart = () => {
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  useEffect(() => {
    const totalAll = Object.values(cartItems.reduce((accumulator, item) => {
      accumulator[item.name] = accumulator[item.name] || { quantity: 0, name: item.name };
      accumulator[item.name].quantity += item.quantity;
      accumulator[item.name].price = item.price;
      return accumulator;
    }, {})).map((items) => parseInt(items.quantity) * parseInt(items.price));
    let result = 0;
    totalAll?.map((item) => result += item);
    setTotal(result);
  }, [cartItems]);
  const handleConfirm = () => {
    if (!email.name || !email.contactno || !email.address) {
      alert('Please fill in all the required details.');
      return;
    }
    const serviceId = 'service_xt0nsv5';
    const templateId = 'template_qi790mu';
    const pubKey = '9ulhK9fpiMZgwgoTb';
  
    setLoading(true); // Move setLoading(true) here to start loading
  
    const cartItemsContent = Object.values(cartItems.reduce((accumulator, item) => {
        accumulator[item.name] = accumulator[item.name] || { quantity: 0, name: item.name };
        accumulator[item.name].quantity += item.quantity;
        accumulator[item.name].src = item.src;
        accumulator[item.name].price = item.price;
        return accumulator;
      }, {})).map(
        (item) =>
          `${item.name} ${item.quantity} qty. ${parseInt(
            item.price
          ) * parseInt(item.quantity)} rs \n`
      )

    const content = `${cartItemsContent.join('')}`;

    emailjs
      .send(serviceId, templateId, {
        to_email: 'maguvabusiness@gmail.com',
        from_name: email.name,
        from_email: 'cutomermaguva@gmail.com',
        contactno: email.contactno,
        address: email.address,
        cartItems: content,
        customer_email: email.email
      }, pubKey)
      .then((response) => {
        console.log(response);
        alert('Order confirmed! You will receive an email shortly.');
        setShowModal(false);
      })
      .catch((error) => {
        console.error('Error confirming order:', error);
        alert('Failed to confirm order. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-screen h-screen bg-amber-100 items-center">
      <div onClick={() => navigate(-1)} style={{ fontFamily: 'Nunito, sans-serif' }} className='flex text-amber-800 bg-amber-100 p-3 rounded-3xl cursor-pointer hover:bg-amber-200'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Go back
      </div>
      <h1 className="text-3xl text-amber-500 font-bold mb-6 text-center" style={{ fontFamily: 'Nunito,sans-serif', fontWeight: 800, fontSize: 28 }}>Your Cart</h1>
      {Object.values(cartItems.reduce((accumulator, item) => {
        accumulator[item.name] = accumulator[item.name] || { quantity: 0, name: item.name };
        accumulator[item.name].quantity += item.quantity;
        accumulator[item.name].src = item.src;
        accumulator[item.name].price = item.price;
        return accumulator;
      }, {})).map((groupedItem, index) => (
        <div key={index} className="mb-2 ml-10 rounded-xl bg-white shadow-md w-3/4 p-5 flex flex-1 justify-between items-center">
          <div>
            <strong className='text-xl' style={{ fontFamily: 'Nunito, sans-serif' }}>{groupedItem.name}</strong> <br></br>
            <div className='flex gap-2'>
              <p style={{ fontFamily: 'Nunito, sans-serif' }}>Quantity</p>
              <button className="bg-red-700 hover:bg-red-600 p-1 rounded" onClick={() => handleDecreaseQuantity(groupedItem.name)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </button>
              {groupedItem.quantity}{' '}
              <button className="bg-green-700 hover:bg-green-600 p-1 rounded" onClick={() => handleIncreaseQuantity(groupedItem.name)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
            <button
              className="ml-2 text-red-500"
              onClick={() => handleDeleteItem(groupedItem.name)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
          <div className='text-green-700 text-xl' style={{ fontWeight: 700, fontFamily: 'Nunito,sans-serif' }}>₹ {parseInt(groupedItem.quantity) * parseInt(groupedItem.price)}</div>
        </div>
      ))}
      <div className='mb-2 p-3 mt-2 ml-10 w-3/4 flex flex-1 gap-5 flex-wrap justify-between items-center'>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}
          onClick={handleClearCart}
        >
          Clear All Items
        </button>
        <p className='text-md text-amber-700' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>Total Amount : <span className="text-green-700" style={{ fontWeight: 800, fontSize: 20 }}>₹ {total}</span></p>
      </div>
  
      <div className="flex flex-1 flex-col justify-center items-center gap-7">
      <p className='px-5' style={{ fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}>Net WT :<span className=' text-amber-800 text-2xl'>250gm</span> each packet</p>
        <p className='px-5' style={{ fontWeight: 600, fontFamily: 'Nunito, sans-serif' }}>* To confirm your order, click on checkout and we get back to you soon.</p>
        <button
          className="bg-amber-500 w-1/4 min-w-60 hover:bg-amber-600 items-center text-white flex flex-1 justify-center px-4 py-2 rounded-full mr-4"
          onClick={handleCheckout}
          style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, textAlign: 'center' }}
        >
          <p>Checkout</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
        </button>
      </div>
  
      {showModal && (
        <div className="fixed overflow-scroll inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-wrap z-50">
          <div className="bg-white p-6 rounded w-3/4 lg:w-2/3">
            <div className='flex flex-1 justify-between'>
              <p className='text-amber-700 text-xl' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>Fill your details, before you confirm</p>
              <div className='cursor-pointer hover:bg-amber-100 rounded-full p-2' onClick={() => { setShowModal(false); setEmail({}); }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
              </div>
            </div>
            <div className='flex flex-1 flex-col'>
              <label className='mt-5 ml-4' style={{ fontFamily: 'Nunito' }}>Full Name</label>
              <input className='p-3 bg-amber-100 rounded-full border-none focus:border-none' style={{ fontFamily: 'Nunito' }} value={email?.name ?? ''} onChange={(e) => setEmail({ ...email, name: e.target.value })} placeholder='eg. Joe' />
              <label className='mt-5 ml-4' style={{ fontFamily: 'Nunito' }}>Email</label>
              <input className='p-3 bg-amber-100 rounded-full border-none focus:border-none' style={{ fontFamily: 'Nunito' }} value={email?.email ?? ''} onChange={(e) => setEmail({ ...email, email: e.target.value })} placeholder='eg. example@mail.com' />
              <label className='mt-5 ml-4' style={{ fontFamily: 'Nunito' }}>Contact Number</label>
              <input className='p-3 bg-amber-100 rounded-full border-none focus:border-none' style={{ fontFamily: 'Nunito' }} value={email?.contactno ?? ''} type='number' onChange={(e) => setEmail({ ...email, contactno: e.target.value })} placeholder='10 digits' />
              <label className='mt-5 ml-4' style={{ fontFamily: 'Nunito' }}>Post Address</label>
              <textarea className='p-3 bg-amber-100 rounded-full border-none focus:border-none' style={{ fontFamily: 'Nunito', lineHeight: 1.5, resize: 'vertical' }} value={email?.address ?? ''} onChange={(e) => setEmail({ ...email, address: e.target.value })} placeholder='eg. #19, 5th cross, 3rd Main road, Amir Nagar, Nellore, AndraPradesh -  570036' />
              <div className='flex flex-1 justify-center mt-10'>
                <button
                  className='p-3 bg-amber-500 w-2/3 min-w-60 rounded-full shadow-md hover:bg-amber-600 text-white text-xl'
                  onClick={handleConfirm}
                  style={{ fontFamily: 'Nunito', fontWeight: 800 }}
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? 'Confirming...' : 'Confirm'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default Cart;
