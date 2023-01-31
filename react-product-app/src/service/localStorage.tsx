type rating = {
  rate: number;
  count: number;
};

export type product = {
  id: number;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  rating?: rating;
};

export const updateProductToStorage = (p: product[]) => {
  localStorage.setItem("productList", JSON.stringify(p));
};

export const getProductFromStorage = (): product[] => {
  let product = localStorage.getItem("productList");
  return product ? JSON.parse(product) : [];
};

export const setLoadState = () => {
  localStorage.setItem("isLoaded", "1");
};

export const getLoadState = (): number => {
  let value = localStorage.getItem("isLoaded");
  return value ? Number(value) : 0;
};
