import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import CustomerPage from "./pages/CustomerPage";
import ProductPage from "./pages/ProductPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">E-commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/" element={<h1>Welcome to E-commerce</h1>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
