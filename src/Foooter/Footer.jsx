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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="mb-5 pb-4">
              <div className="flex items-center">
  <div className="lg:w-24 rounded-full">
    <img
      className="h-6 w-6"
      src="src/assets/images/group 2.png"
      alt="Health Logo"
    />
  </div>
  <h1 className=" font-bold text-xl lg:text-xl ">Health</h1>
  {/* <span className="mt-0 pt-0 ml-1">Health</span> */}
</div>
                
                <p>
                  <h2>Sahibabad, Ghaziabad, Uttar Pradesh</h2>
                  <br />
                  <p>20005</p>
                  <br />
                  <strong>Phone:</strong>+09980****97 <br />
                  <strong>Email:</strong> info@gmail.com <br />
                </p>
                <div className="flex gap-2 h-12">
                  <div className="h-full flex items-center justify-center">
                    
                    <FaFacebook className="h-full" />
                  </div>
                  <div className="h-full flex items-center justify-center">
                    
                    <FaTwitter className="h-full" />
                  </div>
                  <div className="h-full flex items-center justify-center">
                    
                    <FaYoutube className="h-full" />
                  </div>
                  <div className="h-full flex items-center justify-center">
                
                    <FaPinterest className="h-full" />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h4 className="mb-4">UseOuick Links</h4>
                <ul>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" />
                    <a href="" className="hover-text-yellow-500">About Us</a>
                    
                  </li>

                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" /> <a href="" className="hover-text-yellow-500"> Our Pricing</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" /><a href="" className="hover-text-yellow-500"> Our Gallaery</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" /> <a href="" className="hover-text-yellow-500">Appointment</a>
                  </li>
                  <li className="pb-4 flex items-center">
                    <FaChevronRight className="mr-2" /> <a href="" className="hover-text-yellow-500">Privacy Policy </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="mb-4">Department</h4>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" />
                  <a href="" className="hover-text-yellow-500">About Us </a>
                </li>

                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" />
                  <a href="" className="hover-text-yellow-500"> Our Pricing </a>
                </li>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" /><a href="" className="hover-text-yellow-500"> Our Gallaery </a>
                </li>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" /><a href="" className="hover-text-yellow-500"> Appointment </a>
                </li>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" /><a href="" className="hover-text-yellow-500">  Privacy Policy </a>
                </li>
              </div>
              <div className="mb-5">
                <h4 className="mb-4">UseFul Links</h4>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" />
                  <a href="" className="hover-text-yellow-500">About Us </a>
                </li>

                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" /><a href="" className="hover-text-yellow-500"> Our Pricing </a>
                </li>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" /> <a href="" className="hover-text-yellow-500"> Our Gallaery </a>
                </li>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" /> <a href="" className="hover-text-yellow-500"> Appointment </a>
                </li>
                <li className="pb-4 flex items-center">
                  <FaChevronRight className="mr-2" /><a href="" className="hover-text-yellow-500"> Privacy Policy </a>
                </li>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
      <footer className="footer justify-center bg-gray-800 border-base-300 border-t text-white px-10 py-4">
   <p >Copyright @ 2024 Health.com. All rights reserved.</p>
</footer>

    </div>
  );
};

export default Footer;

// import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa"

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer text-blue-500 bg-red-100 p-10">
//   <nav>
//     <h6 className="footer-title">Services</h6>
//     <a className="link link-hover">Branding</a>
//     <a className="link link-hover">Design</a>
//     <a className="link link-hover">Marketing</a>
//     <a className="link link-hover">Advertisement</a>
//     <div className="flex gap-2 h-12">
//          <div className="h-full flex items-center justify-center"> <FaFacebook className="h-full" />
//          </div>
//          <div className="h-full flex items-center justify-center"> <FaTwitter className="h-full" />
//           </div>
//           <div className="h-full flex items-center justify-center"> <FaYoutube className="h-full" />
//            </div>
//            <div className="h-full flex items-center justify-center"> <FaPinterest className="h-full" />
//            </div>
//            </div>
//   </nav>
//   <nav>
//   <div className="collapse collapse-arrow bg-base-200">
//   <input type="radio" name="my-accordion-2" />
//   <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
//   <div className="collapse-content">
//     <p>hello</p>
//   </div>
// </div>
// <div className="collapse collapse-arrow bg-base-200">
//   <input type="radio" name="my-accordion-2" />
//   <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
//   <div className="collapse-content">
//     <p>hello</p>
//   </div>
// </div>
// <div className="collapse collapse-arrow bg-base-200">
//   <input type="radio" name="my-accordion-2" />
//   <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
//   <div className="collapse-content">
//     <p>hello</p>
//   </div>
// </div>
//   </nav>
//   <nav>
//     <h6 className="footer-title">Legal</h6>
//     <a className="link link-hover">Terms of use</a>
//     <a className="link link-hover">Privacy policy</a>
//     <a className="link link-hover">Cookie policy</a>

//   </nav>

// </footer>
// <footer className="footer bg-base-200 text-white border-base-300 border-t px-10 py-4">
//     <p>Copywright@2024 Health.com All right Reserved</p>
// </footer>
//     </div>
//   )
// }

// export default Footer
