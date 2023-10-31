import axios from "axios";
const baseURL = "https://gray-average-barnacle.cyclic.cloud/";

export const AUTH_URI = axios.create({
    baseURL: `${baseURL}/auth`,
});

export const PRODUCT_URI = axios.create({
    baseURL: `${baseURL}/product`,
});