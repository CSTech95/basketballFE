import React from "react"
import Cover from "../cover/Cover"
import { Footer } from "../footer/Footer"
import { Navbar } from "../navbar/Navbar"
import QueryPlayers from "../queryPlayers/QueryPlayers"
import { QueryGames } from "../querygames/QueryGames"
import MyComponent from "../samples/MyComponent"
import { StatSlideshow } from "../statSlideshow/StatSlideshow"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      {/*<StatSlideshow />
      <Cover />
      <div className="grid grid-cols-1 grid-gap-4 border border-black md:grid-cols-2">
        <QueryPlayers />
        <QueryGames />
      </div>
      <div className="h-[1196px] bg-stone-950">
        <MyComponent />
      </div>*/}
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home
