

    const Doctors = () => {
    return (
          <div>
            <div className="flex items-center justify-center mt-4">
            <div className=" lg:w-24 rounded-full">
            <img className="h-10 w-10 ml-12"
              src="src/assets/images/group 2.png"
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
        <div className=" flex gap-2 justify-center ">
            <div className="ml-5 card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-base-200 my-10 mx-10 rounded-lg ">
                <img
                src="src/assets/images/dr. smith.png"
                alt="Shoes"
                className="rounded-xl h-72 w-72 "
                />
                
            </figure>
            <h1 className="font-bold text-2xl ml-9 mt-0 mb-0 lg:mt-0 mr-20">Dr. Dredor Smith</h1>
            <div className="card-body items-center mt-0 mb-0 lg:mt-0 lg:mb-0 text-center">
                <div className="flex space-x-24">
                <h2 className="card-title bg-base-200 rounded-lg p-2 mb-6">Medicine Specialist</h2>
                <div className="rating mt-2">
    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
    <p > 3.9 (252)</p>
    </div>
                </div>
                <h2 className="text-xl font-bold mr-64">4895 Patients</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            
            </div>
            </div>
            <div className="ml-5 card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-base-200 my-10 mx-10 rounded-lg">
                <img
                src="src/assets/images/dr amrita sen gupta.png"
                alt="Shoes"
                className="rounded-xl h-72 w-72 bg-none"
                />
            </figure>
            <h1 className="font-bold text-2xl ml-9 mt-0 mb-0 lg:mt-0 mr-20">Dr. Amrita Sen Gupta</h1>
            <div className="card-body items-center mt-0 mb-0 lg:mt-0 lg:mb-0 text-center">
                <div className="flex space-x-24">
                <h2 className="card-title bg-base-200 w-full rounded-lg p-2 mb-6 mr-5">General Surgeon</h2>
                <div className="rating mt-2">
    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
    <p > 4.8 (399)</p>
    </div>
                </div>
                <h2 className="text-xl font-bold mr-64">4895 Patients</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            
            </div>
            
            </div>
            <div className="ml-5 card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 bg-base-200 my-10 mx-10 rounded-lg">
                <img
                src="src/assets/images/dr christinne jones.png"
                alt="Shoes"
                className="rounded-xl h-72 w-72"
                />
            </figure>
            <h1 className="font-bold text-2xl ml-9 mt-0 mb-0 lg:mt-0 mr-20">Dr. Christonni Jones</h1>
            <div className="card-body items-center mt-0 mb-0 lg:mt-0 lg:mb-0 text-center">
                <div className="flex space-x-24">
                <h2 className="card-title bg-base-200 rounded-lg p-2 mb-6">Padiatrist</h2>
                <div className="rating mt-2">
    <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
    <p > 4.9 (452)</p>
    </div>
                </div>
                <h2 className="text-xl font-bold mr-64">4895 Patients</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            
            </div>
            
            </div>
        </div>
        </div>

       
    );
    };

    export default Doctors;



    


    