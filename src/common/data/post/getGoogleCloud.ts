import axios from "axios";

export const cloudVisionClient = axios.create({});

cloudVisionClient.interceptors.request.use(
  async (config) => {
    const token = import.meta.env.VITE_GoogleAuth;
    const projectId = import.meta.env.VITE_projectId;
    config.headers!["Authorization"] = "Bearer " + token;
    config.headers!["x-goog-user-project"] = projectId;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export const getGoogleCloudVisionText = async (request_body: any) => {
  const { data } = await cloudVisionClient.post(
    `https://vision.googleapis.com/v1/images:annotate`,
    request_body
  );
  return data;
};
