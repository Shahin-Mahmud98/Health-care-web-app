import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
        <img
          className="rounded-lg bg-none h-100 w-138 lg:max-w-md mt-4 mr-24"
          src="src/assets/images/img2.png"
          alt="Home"
        />
        
        <div className="lg:mr-10 mt-6 lg:mt-0 ml-24">
          <div className="flex items-center mb-4">
            <div className=" rounded-full">
              <img
                className="bg-gray-100 h-6 w-6"
                src="src/assets/images/group 2.png"
                alt="Health Logo"
              />
            </div>
            <h1 className="text-blue-300 text-sm lg:text-lg mt-4 mb-4 ml-4">24/7 EMERGENCY SERVICES</h1>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Caring for <span className="text-blue-600 decoration-blue-300">Health</span>
          </h1>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4">Caring for you</h2>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="btn rounded-full bg-gradient-to-b from-blue-900 to-blue-300 text-white font-bold py-2 px-4">
              DISCOVER MORE
            </a>
            <a className="btn rounded-full bg-gradient-to-b from-blue-900 to-blue-300 text-white font-bold py-2 px-4">
              SEE ALL SERVICES
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-auto px-4 lg:px-0 lg:w-2/3 lg:mt-128 flex flex-col lg:flex-row justify-center items-center p-6 -mb-8 lg:p-10 bg-white rounded-lg shadow-lg ">
      <div className="relative w-full max-w-xs mb-4 ml-4 lg:mb-0 lg:mr-4">
      <input
        type="text"
        placeholder="Ex. Doctor, Hospitals"
        className="input input-bordered w-full pl-10"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
      <div className="relative w-full max-w-xs mb-4 ml-4 lg:mb-0 lg:mr-4">
      <input
        type="text"
        placeholder="Ex, Surgeon, Cardiologist"
        className="input input-bordered w-full pl-10"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
    <div className="relative w-full max-w-xs mb-4 ml-4 lg:mb-0 lg:mr-4">
      <input
        type="text"
        placeholder="Set Your Location"
        className="input input-bordered w-full pl-10"
      />
      <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
        
        <a className="btn rounded-full bg-gradient-to-b from-blue-900 to-blue-300 text-white font-bold py-2 px-6 mr-8 flex items-center">
          <CiSearch className="mr-" /> SEARCH
        </a>
      </div>
    </div>
  );
};

export default Home;

