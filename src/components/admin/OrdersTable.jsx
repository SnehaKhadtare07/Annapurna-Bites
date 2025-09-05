import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase"; // adjust path if needed

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(fetchedOrders);
      },
      (error) => {
        console.error("Error fetching orders:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Items</th>
            <th>People</th>
            <th>Quantity</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.userId}</td>
              <td>
                {order.items.map((item, idx) => (
                  <div key={idx}>{item.name}</div>
                ))}
              </td>
              <td>
                {order.items.map((item, idx) => (
                  <div key={idx}>{item.quantity}</div>
                ))}
              </td>
              <td>
                {order.items.map((item, idx) => (
                  <div key={idx}>{item.people}</div>
                ))}
              </td>
              <td>{order.contact}</td>
              <td>{order.address}</td>
              <td>₹{order.totalPrice}</td>
              <td>{order.status}</td>
              <td>
                {order.createdAt?.toDate
                  ? order.createdAt.toDate().toLocaleString()
                  : new Date().toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
