import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import EditProduct from "./components/EditProduct";
import LoginPage from "./components/LoginPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useState } from "react";
import { useUserContext } from "./context/UserContext";

const App = () => {
  let { isLogin } = useUserContext();
  return (
    <>
      <main className="container-fluid">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/" element={<ProtectedRoutes isLogin={isLogin} />}>
              <Route path="/" element={<Navigate to="/product" />} />
              <Route path="/product" element={<ProductList />} />
              <Route path="/product/add" element={<AddProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
            </Route>
            <Route
              path="/login"
              element={isLogin ? <Navigate to="/product" /> : <LoginPage />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
