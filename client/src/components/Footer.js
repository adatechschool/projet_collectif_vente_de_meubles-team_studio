import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import Data from "../util/Data";
import logo from "../assets/logo.svg"


export default function Footer() {
  return (

    <div className="bg-[#151515]  text-center text-xs p-5  h-19 absolute w-full flex justify-around">
      {/*container */}



      <img src={logo} className="w-28 " alt="logo" />



      <div>
        <button className=" text-white text-3xl pb-3">
          Contact Us
        </button>
        {Data.contactAdress.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between text-center"
            >
              <h3 className="text-white px-6 space-y-2 pt-3 text-clip">
                {item.title}{" "}
              </h3>
            </div>
          );
        })}
      </div>

      <div className=" justify-center space-x-4">
        <div>
          <h2 className="text-white text-3xl pb-3">Follow Us</h2>
        </div>
        <div className="flex justify-between">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-white  ">
            <FaFacebookSquare size="2em" />
          </a>

          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white  ">
            <FaTwitterSquare size="2em" />
          </a>

          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white  ">
            <FaInstagram size="2em" />
          </a>
        </div>
      </div>



      <div className="flex flex-col justify-between ">
        <form>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="EMAIL"
              className="flex-1 px-4 rounded-full focus:outline-none"
            />
            <button className="px-6 py-2 text-white rounded-full bg-[#575555] hover:bg-slate-500 focus:outline-none">
              subscribe
            </button>
          </div>
        </form>
        <div className="text-white md:block">
          <p>
            Copyright @{new Date().getFullYear()}  All Rights Reserved
          </p>
        </div>

      </div>
    </div>










  )
}