import React, { useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [response, setResponse] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    Axios.post("http://localhost:9000/registration", {
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      address: address,
    })
      .then((response) => {
        setResponse(response.data.message);
      })
      .catch((err) => console.log(err));
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
              className="ml-20 py-11 -mt-6"
              src="./loginImages/logologin.svg"
              alt="brand logo"
              width={190}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-[#6b6b6b]">Firstname</label>
            <input
              className="border p-2 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-white
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red invalid:text-red
            focus:invalid:border-red focus:invalid:ring-red"
              type="text"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-[#6b6b6b]">Lastname</label>
            <input
              className="border p-2 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-white
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red invalid:text-red
            focus:invalid:border-red focus:invalid:ring-red"
              type="text"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-[#6b6b6b]">Address</label>
            <input
              className="border p-2 text-black focus:outline-none focus:border-black focus:ring-1 focus:ring-white
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red invalid:text-red
            focus:invalid:border-red focus:invalid:ring-red"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
            <div>
              <h5 className="text-orange-700 text-sm">{response}</h5>
            </div>
          </div>
          <button
            className="border w-full my-5 py-2 bg-[#151515] text-white font-medium border-none hover:bg-[#353535]"
            type="submit"
          >
            Register
          </button>
          <NavLink
            to="/login"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <h5>Already A Member? Sign In</h5>
          </NavLink>
        </form>
      </div>
    </div>
  );
}
