import httpClient from "../api/axios";

const sendUrl = (url) => {
  return httpClient.post("/preview", { urlString: url });
};

export { sendUrl };
