import React, { useState, useEffect } from "react";
import './order.css';

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://utsavmehta24.github.io/E-Api/form.json')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (orderId) => {
    // Optimistic UI update (remove the order from the displayed list immediately)
    setOrders(orders.filter(order => order.id !== orderId));

    // Send a DELETE request to the server to remove the order permanently
    fetch(`http://localhost:8000/Details/${orderId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          // Handle potential errors during deletion (optional)
          console.error('Error deleting order:', response.statusText);
          // You can revert the UI change here if deletion fails
        }
      })
      .catch(error => console.error('Error deleting order:', error));
  };

  return (
    <div className="order-main-section">
      <h1>Order</h1>
      <div className="order-list">
        {orders.map(order => (
          <div key={order.id} className="order-item">
            <h2>{order.name}</h2>
            <p>Email: {order.email}</p>
            <p>Address: {order.address}, {order.city}, {order.state}, {order.zip}</p>
            <p>Weight: {order.Weight}</p>
            <p>Mobile Number: {order.MobileNumber}</p>
            <p>Any Specification: {order.anySpecification}</p>
            <p>Selected Date: {order.selectedDate}</p>
            <p>Selected Time: {order.selectedTime}</p>
            <p><button onClick={() => handleDelete(order.id)}>Take Order</button></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;

