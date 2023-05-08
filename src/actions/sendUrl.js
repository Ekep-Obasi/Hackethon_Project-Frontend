import httpClient from "../api/axios";

const sendUrl = (url) => {
  return httpClient.post("/api", { urlString: url });
};

export { sendUrl };
