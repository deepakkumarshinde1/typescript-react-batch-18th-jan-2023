import { createContext, useContext, useState } from "react";
type UserContextType = {
  isLogin: boolean;
  user: User;
  logout(): void;
  login(): void;
};
let init: User = {
  username: "",
  role: "",
};

let UserContext = createContext<UserContextType>({
  isLogin: false,
  user: init,
  logout: () => {},
  login: () => {},
});

type UserContextProps = {
  children: JSX.Element;
};
type User = {
  username: string;
  role: string;
};
export const UserContextProvider = ({ children }: UserContextProps) => {
  let [user, setUser] = useState<User>({ ...init });
  let [isLogin, setLogin] = useState(true);
  let logout = () => {
    setLogin(false);
  };

  let login = () => {
    setLogin(true);
  };
  let value: UserContextType = {
    user,
    isLogin,
    logout,
    login,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
