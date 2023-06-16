import { api } from "../index";

export const login = async (data: any) => {
  const email = data.email;
  const password = data.password;
  return await api
    .post(`/users/login`, { email, password })
    .then((response) => response.data);
};
