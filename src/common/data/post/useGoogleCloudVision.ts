import { useMutation } from "react-query";
import { getGoogleCloudVisionText } from "./getGoogleCloud";

export const useGoogleCloudVision = () => {
  return useMutation(["submit-essay-assignment"], getGoogleCloudVisionText);
};
