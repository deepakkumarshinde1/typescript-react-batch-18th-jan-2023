import { useProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  let navigate = useNavigate();
  let { productList, removeProduct, cloneProduct } = useProductContext();
  return (
    <>
      <section className="col-12 mt-2">
        <table className="table table-bordered ">
          <thead className="bg-primary text-white">
            <tr>
              <th style={{ width: "5%" }}>Sr</th>
              <th style={{ width: "45%" }}>Name</th>
              <th style={{ width: "15%" }}>Price</th>
              <th style={{ width: "20%" }}>Category</th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.length !== 0 ? null : (
              <tr>
                <td colSpan={5} className="text-danger fw-bold text-center">
                  No Product Found
                </td>
              </tr>
            )}
            {productList.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger mx-1"
                      title="delete"
                      onClick={() => removeProduct(index)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-primary mx-1"
                      title="edit"
                      onClick={() => navigate("/product/edit/" + product.id)}
                    >
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn btn-sm btn-dark mx-1"
                      title="clone"
                      onClick={() => cloneProduct(index)}
                    >
                      <i className="fa fa-clone" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default ProductList;
