import axios from "axios";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";
export const fetchAllProducts = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const fetchProductsId = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
}

export const fetchProductsBycategories = async (categoryId) => {
    const response = await axios.get(`${API_BASE_URL}/categories/${categoryId}/products`);
    return response.data;
}