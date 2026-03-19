import API from "./apiConfig";

export const registerUser = async ({ name, phone, password }) => {
  const response = await API.post("/auth/register", { name, phone, password });
  return response.data;
};

export const loginUser = async ({ phone, password }) => {
  const response = await API.post("/auth/login", { phone, password });
  return response.data;
};
