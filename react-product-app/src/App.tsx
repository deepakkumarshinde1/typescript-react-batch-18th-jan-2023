import AddProduct from "./components/AddProduct";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import { Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import EditProduct from "./components/EditProduct";

const App = () => {
  return (
    <>
      <main className="container-fluid">
        <div className="row justify-content-center">
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/product" />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
