import { api } from "../index";

export const login = async (data: any) => {
  const email = data.email;
  const password = data.password;
  return await api
    .post(`/users/login`, { email, password })
    .then((response) => response.data);
};

export const checkEmail = async (data: any) => {
  const email = data;
  return await api
    .post(`/users/checkEmail`, { email })
    .then((response) => response.data);
};

export const register = async (data: any) => {
  const email = data.email;
  const password = data.password;
  const username = data.username;
  const role = "user";
  const trendProducts: Array<number> = [];
  return await api
    .post(`/users/register`, { username, email, password, role, trendProducts })
    .then((response) => response.data);
};

export const addTrendProduct = async (data: any) => {
  const id = data.idUser;
  const productId = data.idProduct;
  return await api
    .put(`/users/addTrendProduct`, { id, productId })
    .then((response) => response.data);
};
