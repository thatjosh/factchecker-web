import axios from "axios";

const factCheckerClient = axios.create({});

export const getFactchecker = async (input: string): Promise<any> => {
  const API_KEY = import.meta.env.VITE_FactCheckerAPIKey;
  const { data } = await factCheckerClient.get<any>(
    `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${input}&key=${API_KEY}`
  );
  return data;
};
