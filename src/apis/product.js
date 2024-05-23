import axiosClient from "./axiosClient";

const ProductAPI = {
  getAllProduct: () => {
    const url = "/api/products";
    return axiosClient.get(url);
  },
  getCategory: (query) => {
    const url = `/api/products?category=${query}`;
    return axiosClient.get(url);
  },
  getDetailProduct: (id) => {
    const url = `/api/product/${id}`;
    return axiosClient.get(url);
  },
  updatedStarProduct: (params, id) => {
    const url = `/api/product/${id}`;
    return axiosClient.put(url, { ...params });
  },
  // getPagination: (query) => {
  // 	const url = `/api/products/pagination${query}`;
  // 	return axiosClient.get(url);
  // },
  getTrenddingProduct: (query) => {
    const url = `/products?status=${query}`;
    return axiosClient.get(url);
  },
  // Cart
  getCart: (id) => {
    const url = `/api/cart/${id}`;
    return axiosClient.get(url);
  },
  postCart: (params) => {
    const url = `/api/cart`;
    return axiosClient.post(url, { ...params });
  },
  deletedCart: (query) => {
    const url = `/api/cart?count=${query}&idProduct=${query}&idUser=${query}`;
    return axiosClient.delete(url);
  },
  // order
  getOrder: (id) => {
    const url = `/api/order/${id}`;
    return axiosClient.get(url);
  },
  postOrder: (params) => {
    const url = `/api/order`;
    return axiosClient.get(url, params);
  },
};

export default ProductAPI;
