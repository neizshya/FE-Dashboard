/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";

const membershipApi = axios.create({
  baseURL: "https://6464e8359c09d77a62dde60e.mockapi.io",
});

const adminApi = axios.create({
  baseURL: "http://18.141.56.154:8000",
  // headers: { Accept: "application/json" },
});

const trainingApi = axios.create({
  baseURL: "https://647612b1e607ba4797dd420e.mockapi.io",
});

const classApi = axios.create({
  baseURL: "https://642feb34c26d69edc886a350.mockapi.io",
});

export { adminApi, membershipApi, classApi, trainingApi };
