import React, { useEffect, useState } from "react";
import UserAPI from "../apis/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const naviagte = useNavigate();

  const changeInput = (event) => {
    setInput(() => {
      return {
        ...input,
        email:
          event.target?.name === "email" ? event.target?.value : input.email,
        password:
          event.target?.name === "password"
            ? event.target?.value
            : input.password,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await UserAPI.login(input);
      if (!response?.statusCode) {
        throw new Error(response.meta[0].message);
      }
      // dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("id_user", response.meta[0].id);
      localStorage.setItem("user", JSON.stringify(response.meta[0]));
      alert(response.meta[0].message);
      // props.setLogin(true);
      naviagte("/");
      window.location.reload();
    } catch (error) {
      alert(error || "Đăng nhập thất bại");
    }
  };

  return (
    <section className="max-padd-container flexCenter flex-col pt-32 bg-primary">
      <div className="w-full max-2-[666px] h-[600px] bg-primary m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" ? (
            <input
              onChange={(e) => changeInput(e)}
              name="username"
              type="text"
              placeholder="Your Name"
              className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
            />
          ) : (
            ""
          )}
          <input
            onChange={(e) => changeInput(e)}
            name="email"
            type={"email"}
            placeholder="Your Email"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
          <input
            onChange={(e) => changeInput(e)}
            name="password"
            type={"password"}
            placeholder="Your Pass"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn-dark rounded-xl my-5 !py-1"
        >
          Countinue
        </button>

        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-secondary underline cursor-pointer"
            >
              Login
            </span>
          </p>
        ) : (
          <>
            <p className="text-black pb-2 font-bold">
              Create An Account{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-secondary underline cursor-pointer"
              >
                Click Here!
              </span>
            </p>
            {/* <div className="py-4"> */}
              <p className="text-black pb-2 font-bold">
                Forgot Password{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="text-secondary underline cursor-pointer"
                >
                  Click Here!
                </span>
              </p>
              <p className="text-black font-bold">
                Change new password{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="text-secondary underline cursor-pointer"
                >
                  Click Here!
                </span>
              </p>
            {/* </div> */}
          </>
        )}
        <div className="flexStart mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By countinue, I agree the terms of use & privacy policy!!</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
