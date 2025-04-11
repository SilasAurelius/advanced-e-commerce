import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerPage from './pages/CustomerPage';
import ProductPage from './pages/ProductPage';
import OrderPage from './pages/OrderPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
