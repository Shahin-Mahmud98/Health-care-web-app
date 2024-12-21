import { Link } from "react-router-dom";



const Navbar = () => {
  
  return (
    <nav>
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start -mr-12">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
            
            <Link to={"/doctors"}>Find Doctors</Link> 
            
            </li>
            <li>
              Hospitals
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center mb-4">
          <div className=" lg:w-24 rounded-full ">
            <img className="h-10 w-10 ml-12"
              src="src/assets/images/group 2.png"
              alt="Health Logo"
            />
          </div>
          <h1 className="text-blue-600 font-bold text-xl lg:text-2xl mt-2 mr-4">Health</h1>
        </div>
      </div>
      <div tabIndex={0} className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-serif text-lg lg:text-2xl">
          <li>
           <Link to={"/doctors"}>Find Doctors</Link> 
          </li>
          <li>
            <a>Hospitals</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <div className="flex items-center">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 lg:h-7 lg:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 lg:h-7 lg:w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">7</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          ></div>
        </div>
        <a className="btn rounded-full bg-gradient-to-b from-blue-900 to-blue-300 text-white font-bold py-2 px-4">
          APPOINTMENT NOW
        </a>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
