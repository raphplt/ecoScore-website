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
  return await api
    .post(`/users/register`, { username, email, password, role })
    .then((response) => response.data);
};