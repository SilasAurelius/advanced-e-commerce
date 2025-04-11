import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/customers';

export const getAllCustomers = () => axios.get(API_BASE);
export const getCustomerById = (id) => axios.get(`${API_BASE}/${id}`);
export const createCustomer = (data) => axios.post(API_BASE, data);
export const updateCustomer = (id, data) => axios.put(`${API_BASE}/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_BASE}/${id}`);
