import { ChangeEvent, FormEvent, useState } from "react";
import { useProductContext } from "../context/ProductContext";
const AddProduct = () => {
  let { changeInput, saveProduct, newProduct } = useProductContext();
  return (
    <>
      <section className="card col-6 col-lg-4 p-4 mt-3">
        <h1>Add New Product </h1>
        <form action="#" onSubmit={saveProduct ? saveProduct : () => {}}>
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

          <button className="mt-2 btn btn-outline-success">
            <span className="fa fa-floppy-o me-2 "></span>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default AddProduct;
