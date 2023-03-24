import React, { useState, useContext } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [response, setResponse] = useState("");

  const { setUser } = useContext(UserContext);

  Axios.defaults.withCredentials = true;

  async function handleSubmit(e) {
    e.preventDefault();

    const userInfo = await Axios.post("http://localhost:9000/login", {
      email: email,
      password: password,
    });
    console.log(userInfo);

    setUser(userInfo.data.checkUser);
    let message = userInfo.data.message;
    if (message === "Login Successful") {
      setRedirect(true);
    } else {
      setResponse(message);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          className="w-full h-full object-cover"
          src="./loginImages/loginimage.jpg"
          alt="design living room"
        />
      </div>
      <div className="bg-[#f2F2F2] text-[#151515] flex flex-col justify-center font-worksans">
        <form
          className="max-w-[400px] w-full mx-auto p-4"
          method="post"
          action=""
          onSubmit={handleSubmit}
        >
          <div>
            <img
              className="ml-20 py-20 -mt-6"
              src="./loginImages/logologin.svg"
              alt="brand logo"
              width={190}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-[#6b6b6b]">Email</label>
            <input
              className="border p-2 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-white
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red invalid:text-red
            focus:invalid:border-red focus:invalid:ring-red"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-[#6b6b6b]">Password</label>
            <input
              className="border p-2 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-white"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <h5 className="text-orange-700 text-sm">{response}</h5>
          </div>
          <button
            className="border w-full my-8 py-2 bg-[#151515] text-white font-medium border-none hover:bg-[#353535]"
            type="submit"
          >
            SIGN IN
          </button>
          <div className="flex justify-between">
            <p className="flex items-center accent-black">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
            {/* <a href='/'>Create an account</a> */}
          </div>
          <div className="text-center text-sm my-10 underline">
            <NavLink
              to="/register"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <h3>Want to join the community? Sign up now</h3>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
