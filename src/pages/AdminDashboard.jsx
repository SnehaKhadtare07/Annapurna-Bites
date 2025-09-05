import React, { useState } from "react";
import OrdersTable from "../components/admin/OrdersTable";
import FeedbackTable from "../components/admin/FeedbackTable";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <div className="admin-dashboard">
      <div className="admin-buttons">
        <button onClick={() => setActiveTab("orders")}>Orders</button>
        <button onClick={() => setActiveTab("feedback")}>Feedback</button>
      </div>

      <div className="admin-content">
        {activeTab === "orders" && <OrdersTable />}
        {activeTab === "feedback" && <FeedbackTable />}
      </div>
    </div>
  );
};

export default AdminDashboard;
