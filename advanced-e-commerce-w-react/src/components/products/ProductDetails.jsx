import { useEffect, useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import api from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch {
      setError('Failed to fetch product.');
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/products/${id}`);
      navigate('/products');
    } catch {
      setError('Failed to delete product.');
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!product) return <p>Loading...</p>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ${product.price}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>Delete Product</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
