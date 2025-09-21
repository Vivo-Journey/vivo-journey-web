import { apiUrl, DELETE, GET, PATCH, POST, PUT } from "../config/api";
import { setLoading } from "./loading";

const buildRequestOptions = (method, data) => ({
  method,
  headers: { "Content-Type": "application/json" },
  ...(data && { body: JSON.stringify(data) }),
});

const handleFetch = (endpoint, method, data) => {
  setLoading(true); // liga loading
  return fetch(`${apiUrl}${endpoint}`, buildRequestOptions(method, data))
    .then((res) => res.json())
    .finally(() => setLoading(false)); // desliga loading
};

export const get = (endpoint) => handleFetch(endpoint, GET, null);
export const post = (endpoint, data) => handleFetch(endpoint, POST, data);
export const put = (endpoint, data) => handleFetch(endpoint, PUT, data);
export const del = (endpoint) => handleFetch(endpoint, DELETE, null);
export const patch = (endpoint, data) => handleFetch(endpoint, PATCH, data);
