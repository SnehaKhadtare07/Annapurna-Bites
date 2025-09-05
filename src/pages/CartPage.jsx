import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../services/firebase';
import '../styles/CartPage.css';

export default function CartPage() {
  const { cartItems, updateQuantity } = useCart();
  const [peopleSelections, setPeopleSelections] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );
  const [address, setAddress] = useState('Your profile address here');
  const [contact, setContact] = useState('');
  const [showBill, setShowBill] = useState(false);

  const navigate = useNavigate();

  const calculateItemTotal = (item) => {
    const price = parseFloat(item.price.replace(/[^0-9]/g, ''));
    const people = peopleSelections[item.id] || 1;
    const basePrice = people === 1 ? price / 2 : price;
    return basePrice * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };

  const handlePlaceOrder = async () => {
    if (!contact.trim()) {
      alert('Please enter your contact number');
      return;
    }

    try {
      const orderData = {
        userId: auth.currentUser.uid,
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          people: peopleSelections[item.id] || 1,
        })),
        totalPrice: calculateTotal(),
        address,
        contact,
        status: 'Pending',
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, 'orders'), orderData);

      setShowBill(true);
      alert('✅ Your order has been placed successfully!');

    } catch (error) {
      console.error('Error placing order:', error);
      alert('❌ Failed to place order. Please try again.');
    }
  };

  const handlePeopleChange = (itemId, value) => {
    setPeopleSelections(prev => ({
      ...prev,
      [itemId]: parseInt(value)
    }));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {!showBill ? (
        <>
          <div className="cart-item-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-horizontal-card">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">{item.price}</p>

                  <label>
                    Quantity :
                    <select
                      value={peopleSelections[item.id]}
                      onChange={(e) => handlePeopleChange(item.id, e.target.value)}
                    >
                      <option value={1}>1 (Half Price) </option>
                      <option value={2}>2 (Full price ) </option>
                    </select>
                  </label>

                  <label>
                    people :
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    />
                  </label>

                  <p className="item-total">
                    Total: ₹{calculateItemTotal(item).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-settings">
            <label>
              Address:
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label>
              Contact Number:
              <input
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </label>

            <button className="checkout-btn" onClick={handlePlaceOrder}>
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="bill-section">
          <h3>🧾Final Bill</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} × {item.quantity} (for {peopleSelections[item.id]} person{peopleSelections[item.id] > 1 ? 's' : ''})
              </li>
            ))}
          </ul>
          <p>Address: {address}</p>
          <p>Contact: {contact}</p>
          <h2>Your Total Bill: ₹{calculateTotal().toFixed(2)}</h2>
          <p className="thank-you-text">🎉 Thank you for ordering with AnnapurnaBites!</p>
        </div>
      )}
    </div>
  );
}
