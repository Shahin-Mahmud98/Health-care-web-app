
const specialties = [
  { name: 'Internal Medicine', doctors: '30+ Doctors', icon: '🩺' },
  { name: 'Dental Care', doctors: '30+ Doctors', icon: '🦷' },
  { name: 'Urology Care', doctors: '30+ Doctors', icon: '💧' },
  { name: 'Neurology Care', doctors: '30+ Doctors', icon: '🧠' },
  { name: 'Gynecologists', doctors: '30+ Doctors', icon: '♀️' },
  { name: 'Ophthalmology', doctors: '30+ Doctors', icon: '👁️' },
  { name: 'Orthopedics', doctors: '30+ Doctors', icon: '🦴' },
  { name: 'Cardiology', doctors: '30+ Doctors', icon: '❤️' },
];

const Specialties = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-20">
        <div className="w-24 lg:w-24 rounded-full bg-gray-100 flex items-center justify-center">
          <img
            className="w-20 h-20"
            src="https://img.freepik.com/free-vector/health-care-logo-icon_125964-471.jpg?w=360"
            alt="Health Logo"
          />
        </div>
        <h1 className="text-blue-300 text-sm lg:text-2xl mt-2 mb-4 ml-4">Our Services</h1>
      </div>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Medical Specialties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pl-16 pr-16">
          {specialties.map((specialty) => (
            <div key={specialty.name} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className=" ring-offset-base-100 w-24 flex items-center justify-center">
                  <div className="bg-[#d5f2ec] p-9 w-32 h-32 text-6xl flex items-center justify-center rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">{specialty.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">{specialty.name}</h3>
              <p className="text-gray-600 mt-2">{specialty.doctors}</p>
              <a className="btn rounded-full bg-gradient-to-b from-blue-900 to-blue-300 text-white font-bold py-2 px-4 mt-4">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;
