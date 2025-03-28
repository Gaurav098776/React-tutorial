import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import { toast } from "react-toastify";

const Navbar = ({setIsLoggedIn,isLoggedIn}) => {
  
  
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="text-white flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUP - Logout -Dashboard */}

      <div className="flex items-center gap-x-4">
        { !isLoggedIn &&
          <Link to="/login">
            <button className="bg-sky-800 text-white py-[8px] px-[12px] rounded-[8px] border-sky-700">Login</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup">
            <button className="bg-sky-800 text-white py-[8px] px-[12px] rounded-[8px] border-sky-700">SignUp</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/logout">
            <button onClick={()=>{setIsLoggedIn(false);
              toast.success("Logged out")
            }

            } className="bg-sky-800 text-white py-[8px] px-[12px] rounded-[8px] border-sky-700">Logout</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button className="bg-sky-800 text-white py-[8px] px-[12px] rounded-[8px] border-sky-700">Dashboard</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
