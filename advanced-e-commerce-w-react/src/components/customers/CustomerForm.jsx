import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { createCustomer } from "../../api/customerApi";

const CustomerForm = ({ onSuccess, customer = null }) => {
  const [name, setName] = useState(customer ? customer.name : "");
  const [email, setEmail] = useState(customer ? customer.email : "");
  const [phone, setPhone] = useState(customer ? customer.phone : "");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (customer) {
        await updateCustomer(customer.id, { name, email, phone });
      } else {
        await createCustomer({ name, email, phone });
      }
      onSuccess();
    } catch (err) {
      setError("Failed to save customer.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* form fields for name, email, phone */}
    </Form>
  );
};

export default CustomerForm;
