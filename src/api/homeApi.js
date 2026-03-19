import API from "./apiConfig";

export const getBanners = async () => {
  const response = await API.get("/home/banners");
  return response.data;
};

export const getCategories = async () => {
  const response = await API.get("/home/categories");
  return response.data;
};

export const getProductList = async categoryId => {
  const response = await API.get(`/product/list?category_id=${categoryId}`);
  return response.data;
};

export const getProductDetails = async productId => {
  const response = await API.get(`/product/details?id=${productId}`);
  return response.data;
};

export const searchProducts = async query => {
  const response = await API.get(
    `/product/search?q=${encodeURIComponent(query)}`,
  );
  return response.data;
};

export const getPopularProducts = async () => {
  const response = await API.get("/home/popular_product_list");
  return response.data;
};
