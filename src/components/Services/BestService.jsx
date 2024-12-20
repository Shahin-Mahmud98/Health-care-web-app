const BestService = () => {
  return (
    <div className="hero bg-base-200 flex items-center justify-center min-h-screen p-5">
      
      <div className="hero-content flex flex-col lg:flex-row-reverse md:flex-row items-start md:items-center w-full max-w-6xl gap-8">
       
        <div className="w-full md:w-1/2 flex justify-center mt-24">
          
          <div className="relative bg-gradient-to-b from-blue-900 to-blue-300 p-8 w-lvw h-96 rounded-lg flex justify-center items-center mt-28">
           
            <img
              src="src/assets/images/img3.png"
              alt="Doctor"
              className="h-screen rounded-lg object-cover -mt-52"
            />
            <img className="h-36 w-36 mb-72" src="src/assets/images/Group 27.png" alt="" />
          </div>
        </div>
        <div className="w-full p-8 mr-24 rounded-lg mt-32 ">
          
          <h1 className="text-3xl font-bold text-center mb-8 ">
            
            We Remain Continuously Available For Your Health Services
          </h1>
          <div className="space-y-6">
           
            <div className="flex items-start space-x-4">
              
              <div className="text-xl text-center text-blue-600  ring rounded-full w-16 lg:w-24 items-center justify-center">01</div>
              <div>
                
                <h2 className="text-xl font-semibold">
                  Compassionate & Expert Care
                </h2>
                <p>
                  
                  Our team of dedicated healthcare professionals combines years
                  of experience with a genuine commitment to providing.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              
              <div className="text-xl text-center text-blue-600  ring rounded-full w-16 lg:w-24 items-center justify-center">02</div>{" "}
              <div>
                
                <h2 className="text-xl font-semibold">
                  Patient-Centered Approach
                </h2>
                <p>
                  
                  Your health and well-being are our top priorities. We take the
                  time to listen to your concerns, answer your questions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              
              <div className="text-xl text-center text-blue-600  ring rounded-full w-16 lg:w-24 items-center justify-center">03</div>
              <div>
                
                <h2 className="text-xl font-semibold">
                  Personalized Treatment Plans
                </h2>
                <p>
                  
                  We understand that every patient is unique, and their
                  healthcare needs may vary. That is why we create
                  individualized treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestService;

