// A mock function to mimic making an async request for data

import axios from 'axios';
export function fetchItems() {
  return axios.get('http://localhost:8080/items');
}

export function postItems(item){
  return axios.post('http://localhost:8080/items',item);
}