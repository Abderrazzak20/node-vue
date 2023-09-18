import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
  // Funzione per creare un nuovo elemento
  createItem(item) {
    return axios.post(`${API_URL}/items`, item);
  },

  // Funzione per ottenere tutti gli elementi
  getAllItems() {
    return axios.get(`${API_URL}/items`);
  },

  // Funzione per ottenere un elemento per ID
  getItemById(id) {
    return axios.get(`${API_URL}/items/${id}`);
  },

  // Funzione per aggiornare un elemento
  updateItem(id, updatedItem) {
    return axios.put(`${API_URL}/items/${id}`, updatedItem);
  },

  // Funzione per eliminare un elemento
  deleteItem(id) {
    return axios.delete(`${API_URL}/items/${id}`);
  },
};
