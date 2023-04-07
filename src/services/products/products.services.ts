import { api } from "../index";

export const fetchProducts = async () => {
  return await api.get(`/products`).then((response) => response.data);
};