// import { useState } from "react"

const Contact = () => {
    // const[PhoneNUmber,setPhoneNumber] = useState('');
    // const [valid,setValid] = useState(true);
    // const handleChange = (event) => {
    //     const input = event.target.value;
    //     setPhoneNumber(input);
    //     setValid(Contact(input));
    // };

    // const contact = (phoneNumber) =>{
    //     const phoneNumberPattern = /*\d{10}$/;
    //     return phoneNumberPattern.test(phoneNumber);
    // }

  return (
    <div className="">
        <div className="flex items-center justify-center mt-4">
        <div className="w-24 lg:w-24 rounded-full">
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/free-vector/health-care-logo-icon_125964-471.jpg?w=360"
            alt="Health Logo"
          />
        </div>
        <h1 className="text-blue-300 text-sm lg:text-2xl mt-2 mb-4 ml-4">Our Doctors</h1>
      </div>
        <div className="mt-4 text-center font-sans text-2xl">
            <h1>Our Special Doctors</h1>
            <div className="font-sans text-wrap text-sm mb-5">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            debitis nisi magni distinctio quidem expedita aspernatur, odit amet
            </p>
            </div>
        </div>

      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
  {/* Phone Number Field */}
  <label>
    {/* <input type="text" value={phoneNumber} */}
    {/* onChange={handleChange} /> */}
  </label>

  {/* Date Field */}
  
</div>


          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Message</a>
          </label>
          <textarea
  placeholder="Bio"
  className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        
      </form>
      
      
    </div>
    <div className="w-full md:w-1/2 flex justify-center">
          
          <div className="relative bg-gradient-to-b from-blue-900 to-blue-300 p-8 w-full h-full rounded-lg flex justify-center items-center">
           
            <img
              src="src/assets/images/female1.png"
              alt="Doctor"
              className="h-96 rounded-lg object-cover lg:mt-0 -mt-10  "
            />
          </div>
        </div>
  </div>
</div>
    </div>
  )
}

export default Contact
