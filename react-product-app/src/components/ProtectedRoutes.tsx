import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
type ProtectedProps = {
  isLogin: boolean;
};
const ProtectedRoutes = ({ isLogin }: ProtectedProps) => {
  return (
    <>
      {isLogin ? (
        <>
          <NavBar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default ProtectedRoutes;
