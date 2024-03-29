// A mock function to mimic making an async request for data

import axios from 'axios';
export function fetchItems() {
  return axios.get('http://localhost:8080/items');
}

export function postItems(item){
  return axios.post('http://localhost:8080/items',item);
}

export function deleteItems(id){
  return axios.delete(`http://localhost:8080/items/${id}`);
}

export function UpdateItems({item,change}){
  return axios.patch(`http://localhost:8080/items/${item.id}`,{quantity:change});
}