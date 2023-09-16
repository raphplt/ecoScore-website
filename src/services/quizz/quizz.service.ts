import { api } from "../index";

export const fetchQuizz = async () => {
  return await api.get(`/quizz`).then((response) => response.data);
};

export const fetchQuizzById = async (id: any) => {
  return await api.get(`/quizz/${id}`).then((response) => response.data);
};
