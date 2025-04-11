import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OrderForm from '../components/orders/OrderForm';
import OrderList from '../components/orders/OrderList';

const OrderPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h2>Create Order</h2>
          <OrderForm />
        </Col>
        <Col md={6}>
          <h2>Order List</h2>
          <OrderList />
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPage;
