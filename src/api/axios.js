import axios from "axios";
import SERVER_BASE_URL from "../utils/constants";

const httpClient = axios.create({
  baseURL: SERVER_BASE_URL,
});

export default httpClient;