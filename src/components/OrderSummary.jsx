import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/OrderSummary.css';

export default function OrderSummary({ total }) {
  const { cartItems } = useCart();
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="receipt">
        <h3>🧾 Order Summary</h3>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>Contact: {contact}</p>
        <p className="receipt-total">
       <strong>Total: ₹{total}</strong></p>
      </div>
    );
  }

  return (
    <div className="order-summary">
      <h3>Confirm Your Details</h3>
      <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />
      <button onClick={handleSubmit}>Confirm Order</button>
    </div>
  );
}
