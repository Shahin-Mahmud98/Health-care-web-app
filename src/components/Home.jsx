import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
        <img
          className="rounded-lg bg-none max-w-full lg:max-w-md mt-4 mr-24"
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
      
      <div className="w-full px-4 lg:px-0 lg:w-2/3 lg:mt-128 flex flex-col lg:flex-row justify-center items-center p-6 lg:p-10 bg-white rounded-lg shadow-lg ">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs mb-4 ml-4 lg:mb-0 lg:mr-4"
        />
        <input
          type="text"
          placeholder="Input 2"
          className="input input-bordered w-full max-w-xs mb-4 lg:mb-0 lg:mr-4"
        />
        <input
          type="text"
          placeholder="Input 3"
          className="input input-bordered w-full max-w-xs mb-4 lg:mb-0 lg:mr-4"
        />
        <a className="btn rounded-full bg-gradient-to-b from-blue-900 to-blue-300 text-white font-bold py-2 px-4 flex items-center">
          <CiSearch className="mr-2" /> SEARCH
        </a>
      </div>
    </div>
  );
};

export default Home;

