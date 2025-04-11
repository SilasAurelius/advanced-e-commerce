import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductList = ({ products, onEdit, onDelete }) => {
  // Ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : [];

  if (safeProducts.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="d-flex flex-wrap gap-3">
      {safeProducts.map((product) => (
        <Card key={product.id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button
              variant="warning"
              className="me-2"
              onClick={() => onEdit(product)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => onDelete(product.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
