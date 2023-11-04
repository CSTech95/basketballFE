import { Footer } from "../footer/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"

const Home = () => {
  return (
    <div className="box-border m-0 p-0 flex flex-col h-screen">
      <Navbar />
      <div className="mb-auto h-fit">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}

export default Home
