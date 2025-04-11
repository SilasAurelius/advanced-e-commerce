import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { createOrder } from "../../api/orderApi";

const OrderForm = ({ onSuccess }) => {
  const [customerId, setCustomerId] = useState("");
  const [productIds, setProductIds] = useState([]);
  const [orderDate, setOrderDate] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrder({ customerId, productIds, orderDate });
      onSuccess();
    } catch (err) {
      setError("Failed to create order.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button type="submit">Create Order</Button>
    </Form>
  );
};

export default OrderForm;
