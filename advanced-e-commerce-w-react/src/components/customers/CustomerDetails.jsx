import { useEffect, useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import api from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState('');

  const fetchCustomer = async () => {
    try {
      const res = await api.get(`/customers/${id}`);
      setCustomer(res.data);
    } catch {
      setError('Could not fetch customer data.');
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/customers/${id}`);
      navigate('/customers');
    } catch {
      setError('Failed to delete customer.');
    }
  };

  useEffect(() => {
    fetchCustomer();
  }, [id]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!customer) return <p>Loading...</p>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{customer.name}</Card.Title>
        <Card.Text>Email: {customer.email}</Card.Text>
        <Card.Text>Phone: {customer.phone}</Card.Text>
        <Button variant="danger" onClick={handleDelete}>Delete Customer</Button>
      </Card.Body>
    </Card>
  );
};

export default CustomerDetails;
