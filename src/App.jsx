import { BrowserRouter, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import BestService from "./components/Services/BestService"
import Contact from "./components/Services/Contact"
import Doctors from "./components/Services/Doctors"
import Services from "./components/Services/Services"
import ServicesSection from "./components/Services/ServiceSection"
import Footer from "./Foooter/Footer"




function App() {
  
  return (
   <div>
      <Navbar></Navbar>
      <Home/>
      <Services/>
      <ServicesSection/>
      <BestService/>
      <Doctors/>
      <div>
      <  ServicesSection />
      </div>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App


//<div className="">  
{/* <main className="flex justify-center items-center min-h-screen bg-gray-50"> <SearchBar />
</main> </div> */}