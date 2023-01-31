import { ProductContextProvider } from "./ProductContext";
import { UserContextProvider } from "./UserContext";

type MainContextProps = {
  children: JSX.Element;
};

const MainContext = ({ children }: MainContextProps) => {
  return (
    <>
      <UserContextProvider>
        <ProductContextProvider>{children}</ProductContextProvider>
      </UserContextProvider>
    </>
  );
};
export default MainContext;
