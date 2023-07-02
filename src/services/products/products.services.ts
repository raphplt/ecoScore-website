import { api } from "../index";

export const fetchProducts = async () => {
  return await api.get(`/products`).then((response) => response.data);
};

export const fetchProduct = async (id: any) => {
  return await api.get(`/products/${id}`).then((response) => response.data);
};

export const searchBar = async (search: any) => {
  return await api
    .get(`/products/search?query=${search}`)
    .then((response) => response.data);
};