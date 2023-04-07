import { api } from "../index";

export const fetchCategories = async () => {
  return await api.get(`/categories`).then((response) => response.data);
};
