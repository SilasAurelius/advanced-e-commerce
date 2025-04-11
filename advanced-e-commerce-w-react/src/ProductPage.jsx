import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductForm from "../components/products/ProductForm";
import ProductList from "../components/products/ProductList";
import api from "../api/api";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Is your backend running?");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateOrUpdate = async (productData) => {
    try {
      if (selectedProduct) {
        await api.put(`/products/${selectedProduct.id}`, productData);
      } else {
        await api.post("/products", productData);
      }
      fetchProducts();
      setSelectedProduct(null);
      setError(null);
    } catch (err) {
      console.error("Error saving product:", err);
      setError("Error saving product.");
    }
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err);
      setError("Error deleting product.");
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <h4>{selectedProduct ? "Edit Product" : "Add Product"}</h4>
          {error && <Alert variant="danger">{error}</Alert>}
          <ProductForm
            onSuccess={handleCreateOrUpdate}
            product={selectedProduct}
          />
        </Col>
        <Col md={8}>
          <h4>Product List</h4>
          <ProductList
            products={products}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
