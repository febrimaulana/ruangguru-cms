import axios from "axios";

const headersBasic = {
  Authorization: "Basic cnVhbmdndXJ1OkVudGVycHJpc2UyMDIx",
};

export const APIBASIC = axios.create({
  baseURL: "https://ruangguruapi.herokuapp.com/",
  timeout: 30000,
  headers: headersBasic,
});
