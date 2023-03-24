import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import userLogo from "../assets/user.svg";
import glass from "../assets/magnifyng_glass.png";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export function Navbar() {
  const searchBar = () => {
    console.log("search bar");
  };

  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div className="bg-[#151515] relative h-16 items-center justify-center flex z-50">
      {/* [] pour couleur hexadécimale */}
      <div className="flex items-center absolute">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <img src={logo} alt="logo" width={90} />
        </NavLink>
      </div>

      <div className="flex ml-auto space-x-2">
        <NavLink
          to="/cart"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <img src={cart} className="h-5 w-5 " alt="Access cart" />
        </NavLink>
        <NavLink
          to={!user ? "/login" : "/account"}
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <img src={userLogo} className="h-5 w-5 mr-4" alt="Access count" />
        </NavLink>
        <div>
          {!!user && (
            <div className="ml-0.5 pr-2 py-0.5">
              <h5 className="text-green-700 text-sm">
                {user[0]["user_first_name"]}
              </h5>
            </div>
          )}
        </div>

        <form>
          <div className="relative">
            <div className="h-0 w-0"></div>
            <input
              type="search"
              onClick={searchBar}
              id="default-search"
              className="block w-full p-1
         pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-800 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white"
              placeholder=" Search furnitures..."
              required
            />
            <button
              type="submit"
              className="absolute right-1 bottom-1 text-white  bg-[#151515] focus:ring-3 focus:outline-none focus:ring-[#151515] font-small rounded-lg text-sm px-3 py-3 dark:[#151515]"
            >
              <img
                src={glass}
                className="absolute left-1 bottom-1 h-4 w-4"
                alt="Search Bar"
              />
              <button
                type="submit"
                className="absolute right-1 bottom-1 text-white  bg-[#151515] focus:ring-3 focus:outline-none focus:ring-[#151515] font-small rounded-lg text-sm px-3 py-3 dark:[#151515]"
              >
                <img
                  src="./img/magnifyng_glass.png"
                  className="absolute left-1 bottom-1 h-4 w-4"
                  alt="Search Bar"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
