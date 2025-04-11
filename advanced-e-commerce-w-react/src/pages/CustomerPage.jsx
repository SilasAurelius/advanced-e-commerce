import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomerForm from '../components/customers/CustomerForm';
import CustomerList from '../components/customers/CustomerList';

const CustomerPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h2>Create / Edit Customer</h2>
          <CustomerForm />
        </Col>
        <Col md={6}>
          <h2>Customer List</h2>
          <CustomerList />
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerPage;
