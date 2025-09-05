import React, { useState } from 'react';
import '../styles/CartCard.css'

export default function CartCard({ item, peopleCount }) {
  const [quantity, setQuantity] = useState(1);
  item.quantity = quantity;

  return (
    <div className="cart-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price} x {quantity} x {peopleCount} person(s)</p>
      <div>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <span>{quantity}</span>
      </div>
    </div>
  );
}
