import axios from 'axios';
import HV from '../utils/HttpVerbs';

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const httpRequest = async (endpoint, method, json, token = '', isPotected = false) => {
  const config = isPotected
    ? {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    : {
        headers: {
          'Content-Type': 'application/json',
        },
      };

  if (Object.values(HV) && Object.values(HV).length && !Object.values(HV).includes(method)) throw new Error(`${method}: unsupported method`);

  const res = method === HV.GET ? await axios[method](endpoint, config) : await axios[method](endpoint, json, config);

  return res;
};
