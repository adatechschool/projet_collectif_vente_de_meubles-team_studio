import Banner from "./Banner";
import { Link } from "react-router-dom";

export default function Navbar() {
  const showCart = () => {
    console.log("show cart");
  };
  const userConnect = () => {
    console.log("show connection");
  };
  const searchBar = () => {
    console.log("search bar");
  };

  return (
    <div className="bg-[#151515] relative h-10 items-center justify-center flex z-50">
      {/* [] pour couleur hexadécimale */}
      <div className="flex items-center absolute">
        <img src="./img/logo.svg" width={90} />
      </div>

      <div className="flex ml-auto space-x-2">
        <Link to="/cart">
        <button type="button" onClick={showCart}>
          <img src="./img/cart.svg" className="h-5 w-5 " alt="Access cart" />
        </button>
        </Link>
{/* using (Link to) component to redirect for the target page */}
        <Link to="/login"> 
        <button type="button" onClick={userConnect}>
          <img
            src="./img/user.svg"
            className="h-5 w-5 mr-4"
            alt="Access count"
          />
        </button>
        </Link>

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
                src="./img/magnifyng_glass.png"
                className="absolute left-1 bottom-1 h-4 w-4"
                alt="Search Bar"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
