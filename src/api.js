import axios from 'axios';

const API_URL = 'http://localhost:8080/clientes';

export const getClientes = () => axios.get(API_URL);
export const getClienteById = (id) => axios.get(`${API_URL}/${id}`);
export const addCliente = (cliente) => axios.post(API_URL, cliente);
export const updateCliente = (id, cliente) => axios.put(`${API_URL}/${id}`, cliente);
export const deleteCliente = (id) => axios.delete(`${API_URL}/${id}`);
