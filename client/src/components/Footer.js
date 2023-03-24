
import { NavLink } from "react-router-dom" 
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import Data from "../util/Data" ;
  export function Footer() {

  
    return (
  
  <div className="bg-[#151515] place-items-center text-center text-xs p-5  h-19 absolute w-full flex flex-col md:flex-row md:justify-around">
    {/*container */}

    <div className="mt-2 mb-2 flex place-items-center">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <img src="./img/logo.svg" alt="logo" width={90} />
      </NavLink>
    </div>
    
    <div className="mt-2 mb-2 content-center">
      <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <button className=" text-white text-3xl pb-3">Contact Us</button>
      </NavLink>
      {Data.contactAdress.map((item)=>{return(
        <div key={item.id} >
          <p className="mt-1 mb-1 text-white px-6 space-y-2 pt-3 ">
            {item.title}{" "}
          </p>
        </div>
        );
      })}
    </div>

    <div className="mt-2 mb-2 justify-center space-x-4">
      <div>
        <h2 className="text-white text-3xl pb-3">Follow Us</h2>
      </div>
      <div className="flex justify-around">
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
    
    <div className="mt-2 mb-2 flex flex-col justify-between">
      <form>
        <div className="flex flex-col place-items-center md:flex-row space-x-3">
          <input type="text" placeholder="EMAIL" className="flex-1 w-2/3 md:w-auto px-4 rounded-full focus:outline-none"/>
          <button className="w-1/2 md:w-24 py-2 text-white rounded-full bg-[#575555] hover:bg-slate-500 focus:outline-none">subscribe</button>
        </div>
      </form>
      <div className="text-white md:block">
        <p>Copyright @{new Date().getFullYear()}  All Rights Reserved</p>
      </div>

    </div>
  </div>
     






  )
}