import {
  FaChevronRight,
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="p-10 bg-gray-800 text-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="mb-5 pb-4">
                <div className="flex items-center">
                  <div className="w-24 rounded-full">
                    <img
                      className="h-6 w-6 lg:h-8 lg:w-8"
                      src="src/assets/images/group 2.png"
                      alt="Health Logo"
                    />
                  </div>
                  <h1 className="font-bold text-xl lg:text-xl -ml-14">Health</h1>
                </div>
                <p>
                  <h2 className="text-sm lg:text-base">Sahibabad, Ghaziabad, Uttar Pradesh</h2>
                  <br />
                  <p className="text-sm lg:text-base">20005</p>
                  <br />
                  <strong>Phone:</strong> +09980****97 <br />
                  <strong>Email:</strong> info@gmail.com <br />
                </p>
                <div className="flex gap-2 mt-4">
                  <FaFacebook className="h-6 w-6" />
                  <FaTwitter className="h-6 w-6" />
                  <FaYoutube className="h-6 w-6" />
                  <FaPinterest className="h-6 w-6" />
                </div>
              </div>
              <div className="mb-5">
                <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
                <ul>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">About Us</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Our Pricing</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Our Gallery</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Appointment</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="mb-4 text-lg font-semibold">Departments</h4>
                <ul>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Cardiology</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Neurology</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Orthopedics</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Pediatrics</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Dermatology</a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="mb-4 text-lg font-semibold">Useful Links</h4>
                <ul>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">About Us</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Our Pricing</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Our Gallery</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Appointment</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="#" className="hover:text-yellow-500">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-gray-800 border-t border-base-300 text-white px-10 py-4 text-center">
        <p>Copyright © 2024 Health.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
