import {
  ChangeEvent,
  createContext,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getProductFromStorage,
  product,
  updateProductToStorage,
} from "../service/localStorage";

let initProduct: product = {
  id: 0,
  title: "",
  price: "",
  description: "",
  category: "",
  image: "/images/image_placeholder.png",
  rating: {
    rate: 0,
    count: 0,
  },
};

type ProductContextProps = {
  children: JSX.Element;
};

type pContext = {
  productList: product[];
  newProduct: product;
  changeInput?(
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void;
  saveProduct?(event: FormEvent): void;
};

const ProductContext = createContext<pContext>({
  productList: [],
  newProduct: { ...initProduct },
});

export const ProductContextProvider = ({ children }: ProductContextProps) => {
  let [newProduct, saveNewProduct] = useState<product>({ ...initProduct });
  let [productList, setProductList] = useState<product[]>(
    getProductFromStorage()
  );

  useEffect(() => {
    updateProductToStorage(productList);
  }, [productList]);

  let changeInput = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    let { name, value } = event.target;
    saveNewProduct({ ...newProduct, [name]: value });
  };
  let saveProduct = (event: FormEvent) => {
    event.preventDefault();
    newProduct.id = Date.now();
    setProductList([...productList, { ...newProduct }]);
    saveNewProduct({ ...initProduct });
    alert("Product Added Successfully");
  };
  let values: pContext = {
    productList,
    changeInput,
    saveProduct,
    newProduct,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
