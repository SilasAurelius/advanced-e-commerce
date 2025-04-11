import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/orders';

export const createOrder = (data) => axios.post(API_BASE, data);
export const getAllOrders = () => axios.get(API_BASE);
export const getOrderById = (id) => axios.get(`${API_BASE}/${id}`);
export const updateOrder = (id, data) => axios.put(`${API_BASE}/${id}`, data);
export const deleteOrder = (id) => axios.delete(`${API_BASE}/${id}`);
