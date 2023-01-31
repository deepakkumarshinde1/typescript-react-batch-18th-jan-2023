import { useUserContext } from "../context/UserContext";

const LoginPage = () => {
  let { login } = useUserContext();
  return (
    <>
      <div className="col-6 mx-auto card p-4">
        <input type="text" placeholder="Enter UserName" />
        <input type="text" placeholder="Enter Password" />
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};

export default LoginPage;
