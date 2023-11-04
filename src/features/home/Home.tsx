import { Footer } from "../footer/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const Home = () => {
  return (
    <div className="box-border m-0 p-0 ">
      <Navbar />
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home
