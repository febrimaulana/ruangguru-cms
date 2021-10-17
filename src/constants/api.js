import axios from 'axios';

const headersBasic = {
  Authorization: 'Basic px80LWv6ZeEUyFsBPN9hKsvEnRHsv6PF7Pg4dWaziOMnqvpknB',
};

export const APIBASIC = axios.create({
  baseURL: 'https://api-dev.snjgrosir.id/',
  timeout: 30000,
  headers: headersBasic,
});

export const APIBEARER = bearer => {
  return axios.create({
    baseURL: 'https://api-dev.snjgrosir.id/',
    timeout: 30000,
    headers: {
      Authorization: `Bearer ${bearer}`,
    },
  });
};
