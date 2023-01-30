import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <>
      <main className="container-fluid">
        <div className="row justify-content-center">
          <AddProduct />
          <ProductList />
        </div>
      </main>
    </>
  );
};

export default App;
