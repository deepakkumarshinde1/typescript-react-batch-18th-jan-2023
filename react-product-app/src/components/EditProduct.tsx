import { useProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const AddProduct = () => {
  let { changeInput, updateProduct, newProduct, setEditData } =
    useProductContext();
  let { id } = useParams();

  useEffect(() => {
    if (setEditData) setEditData(Number(id));
  }, []);

  return (
    <>
      <section className="card col-6 col-lg-4 p-4 mt-3">
        <h1>Edit Product </h1>
        <form action="#" onSubmit={updateProduct ? updateProduct : () => {}}>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              name="title"
              value={newProduct.title}
              onChange={changeInput ? changeInput : () => {}}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Price"
              name="price"
              value={newProduct.price}
              onChange={changeInput ? changeInput : () => {}}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              placeholder="Product description"
              name="description"
              value={newProduct.description}
              onChange={changeInput ? changeInput : () => {}}
            ></textarea>
          </div>

          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Category
            </label>
            <select
              className="form-select capitalize"
              name="category"
              onChange={changeInput ? changeInput : () => {}}
              value={newProduct.category}
            >
              <option value="">---select category</option>
              <option value="men's clothing">men's clothing</option>
              <option value="jewelery">jewelery</option>
              <option value="electronics">electronics</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>

          <button className="mt-2 btn btn-outline-primary">
            <span className="fa fa-floppy-o me-2 "></span>
            Update
          </button>
        </form>
      </section>
    </>
  );
};

export default AddProduct;
