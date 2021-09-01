import { t_sleep } from "./types";

const sleep: t_sleep = (s: number) => {
  const ms = s * 1000;
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default sleep;
