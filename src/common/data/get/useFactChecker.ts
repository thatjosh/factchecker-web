import { useQuery } from "react-query";
import { getFactchecker } from "./getFactChecker";

export const useFactChecker = (input: string) =>
  useQuery<any, Error>(["getFactchecker", input], () => getFactchecker(input));
