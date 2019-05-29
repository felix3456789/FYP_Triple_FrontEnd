import http from "./httpService";
import API from "../config/config.json";
const Backend_Api = API.Backend_Api;

export async function getTourById(id) {
  console.log("api link", Backend_Api + id);
  const response = await http.get(Backend_Api + id);
  return response.data;
}

export default {
  getTourById
};
