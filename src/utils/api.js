import { apiUrl, DELETE, PATCH, POST, PUT } from "../config/api";

const buildRequestOptions = (method, data) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  ...(data && { body: JSON.stringify(data) })
});

export const get = async (endpoint) => {
  const response = await fetch(`${apiUrl}${endpoint}`);
  return response.json();
};

export const post = async (endpoint, data) => {
  const response = await fetch(`${apiUrl}${endpoint}`, buildRequestOptions(POST, data));
  return response.json();
};

export const put = async (endpoint, data) => {
  const response = await fetch(`${apiUrl}${endpoint}`, buildRequestOptions(PUT, data));
  return response.json();
};

export const del = async (endpoint) => {
  const response = await fetch(`${apiUrl}${endpoint}`, buildRequestOptions(DELETE));
  return response.json();
};

export const patch = async (endpoint, data) => {
  const response = await fetch(`${apiUrl}${endpoint}`, buildRequestOptions(PATCH, data));
  return response.json();
};