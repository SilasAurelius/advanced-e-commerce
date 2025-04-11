import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductForm from '../components/products/ProductForm';
import ProductList from '../components/products/ProductList';

const ProductPage = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <h2>Create / Edit Product</h2>
          <ProductForm />
        </Col>
        <Col md={6}>
          <h2>Product List</h2>
          <ProductList />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
