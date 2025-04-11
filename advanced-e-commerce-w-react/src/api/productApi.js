import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/products';

export const createProduct = (data) => axios.post(API_BASE, data);
export const getAllProducts = () => axios.get(API_BASE);
export const getProductById = (id) => axios.get(`${API_BASE}/${id}`);
export const updateProduct = (id, data) => axios.put(`${API_BASE}/${id}`, data);
export const deleteProduct = (id) => axios.delete(`${API_BASE}/${id}`);
