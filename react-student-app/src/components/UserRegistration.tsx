import { ChangeEvent, FormEvent, useState } from "react";
type User = {
  name: string;
  email: string;
  gender: string;
};
const UserRegistration = () => {
  let [user, setUser] = useState<User>({
    name: "",
    email: "",
    gender: "",
  });
  let userFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  let inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <section className="card col-8 col-lg-4 p-4 mt-3">
        <h1>User Registration </h1>
        <form action="#" onSubmit={userFormSubmit}>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              value={user.name}
              name="name"
              onChange={inputOnChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              UserName
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter User Name"
              value={user.email}
              name="email"
              onChange={inputOnChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Gender
            </label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={inputOnChange}
                />
                <label className="form-check-label" htmlFor="">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={inputOnChange}
                />
                <label className="form-check-label" htmlFor="">
                  Female
                </label>
              </div>
            </div>
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

export default UserRegistration;
