import { product } from "./localStorage";

const URL: string = "https://fakestoreapi.com/";
type response = [status: boolean, data: product[], message?: string];

const checkStatus = async (status: number) => {
  switch (status) {
    case 200 || 304:
      return [true, []];
    case 404 || 400 || 401 || 403:
      return Promise.reject<response>([
        false,
        [],
        "api request issue, check console",
      ]);
    case 500 || 503 || 504:
      return Promise.reject<response>([false, [], "you have a server error"]);
    default:
      return Promise.reject<response>([
        false,
        [],
        "something went wrong , try again",
      ]);
  }
};
export const getProductService = async () => {
  try {
    let url = URL + "products";
    let response = await fetch(url);
    await checkStatus(response.status);
    let data: product[] = await response.json();
    return Promise.resolve<response>([true, data]);
  } catch (error: any) {
    return Promise.resolve<response>(error);
  }
};
