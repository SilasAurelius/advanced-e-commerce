import React, { useEffect, useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { getAllOrders } from '../../api/orderApi';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getAllOrders();
        setOrders(response.data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <ListGroup>
      {orders.map((order) => (
        <ListGroup.Item key={order.id}>
          <div>
            <strong>Order ID:</strong> {order.id}
            <br />
            <strong>Customer:</strong> {order.customer.name}
            <br />
            <strong>Date:</strong> {order.date}
            <br />
            <Button variant="danger" onClick={() => handleDelete(order.id)}>
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const handleDelete = (id) => {
  console.log('Delete order with ID:', id);
};

export default OrderList;
