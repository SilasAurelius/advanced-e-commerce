import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { createProduct } from "../../api/productApi";

const ProductForm = ({ onSuccess, product = null }) => {
  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product) {
      } else {
        await createProduct({ name, price });
      }
      onSuccess();
    } catch (err) {
      setError("Failed to save product.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Button type="submit">Create Product</Button>
    </Form>
  );
};

export default ProductForm;
