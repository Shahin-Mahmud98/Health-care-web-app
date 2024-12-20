import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


const Contact = () => {
    
    const [value, setValue] = useState({
      startDate: null,
      endDate: null
  });


  //Country code picker area
  const [phone, setPhone] = useState('');
  
  return (
    <div className="">
        <div className="flex items-center justify-center mt-4">
        <div className="w-24 text-center rounded-full">
      <img
        className="w-8 h-8 mr-4"
        src="src/assets/images/Group 2.png"
        alt="Health Logo"
      />
    </div>
        <h1 className="text-blue-500 text-lg lg:text-2xl mt-4 mb-4 -ml-16">Contact Us</h1>
      </div>
        <div className="text-center font-sans text-xl lg:text-2xl mt-4 mb-8">
        <h1 className="font-bold">Get A Quote Today</h1>
            <div className="font-sans text-wrap text-sm mb-5">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            debitis nisi magni distinctio quidem expedita aspernatur, odit amet
            </p>
            </div>
        </div>

      <div className="hero min-h-screen mb-24">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-base-100 w-full max-w-md h-screen shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
        <div className="flex gap-4">
  
  <div >
  <h2 className="mx-1">First Name</h2>
    <label className="input input-bordered flex items-center w-44">
      <input type="text" className="grow" placeholder="First Name" />
    </label>
  </div>
  <div>
    <h2 className="mx-1">Last Name</h2>
    <label className="input input-bordered flex items-center w-44 mb-8">
      <input type="text" className="grow" placeholder="Last Name" />
    </label>
  </div>
</div>

          <div className="-mt-5">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered  w-full" required />
          </div>
        </div>
        <div className="form-control">
        <div className="mt-5">
 
  <label>
   
  </label>

  {/* Date Field */}
  
</div>


    {/* 2nd Country area start */}
    <div className="mt-4">
    <div className=" mb-4 -mt-5 input input-bordered">
      <PhoneInput 
        defaultCountry="Us"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
    </div>
      {/* 2nd Country area start */}

          {/* select date area */}
          <div className="input input-bordered">
            <Datepicker value={value} onChange={newValue => setValue(newValue)} />
        </div>
        {/* select date area end */}
          {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Message</a>
          </label>
          <textarea
  placeholder="Bio"
  className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
        </div>
        <div className="form-control mt-6 items-center">
        <a className="btn rounded-full bg-gradient-to-b from-blue-900 to-blue-300 text-white font-bold w-48 items-center">
          APPOINTMENT NOW
        </a>
        </div>
        
      </form>
      
      
    </div>
    <div className="flex justify-center mt-24">
          
          <div className="relative bg-gradient-to-b from-blue-900 to-blue-300 p-8 min-w-max h-96 rounded-lg flex justify-center items-center mt-28">
           
            <img
              src="src/assets/images/image.png"
              alt="Doctor"
              className="h-screen rounded-lg object-cover -mt-44"
            />
          </div>
        </div>
  </div>
</div>
    </div>
  )
}

export default Contact







// const Contact = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//     <div className="relative bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//         <img src="src/assets/images/female.jpeg" alt="Doctor" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-md"/>
//         <div className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full">
//             <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2V7a1 1 0 112 0v2z" clip-rule="evenodd"/>
//             </svg>
//         </div>
//         <h2 className="mt-6 text-lg font-semibold text-gray-900">Dr. Jane Doe</h2>
//         <p className="text-gray-600">General Practitioner</p>
//         <div className="mt-4 flex items-center">
//             <svg className="h-6 w-6 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm12 0H5v10h10V5zm-4 9a1 1 0 100-2 1 1 0 000 2zm-2-6h4v5h-4V8z" clip-rule="evenodd"/>
//             </svg>
//             <span className="text-gray-600">Clinic: City Hospital</span>
//         </div>
  
// </div>
// </div>
//     </div>
//   )
// }

// export default Contact