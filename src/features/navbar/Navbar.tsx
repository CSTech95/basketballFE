import React from "react"
import { NavLink } from "react-router-dom"
import burgerImg from "../../images/burger.svg"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className="relative flex flex-col flex-wrap items-center justify-between px-4 py-3 bg-slate-900  rounded-b-2xl mb-3 sm:flex-col">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <div className="text-sm font-bold leading-relaxed inline-block mr-2 py-2 whitespace-nowrap uppercase text-white">
          <NavLink to="/basketballFE/">
            <img
              src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
              className="flex h-[30px]"
            />
          </NavLink>
        </div>
        <button
          className="text-white bg-white border-white cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <img className="h-8" src={burgerImg} />
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div
        className={
          "lg:flex  items-center " + (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none text-lg ">
          <li className="nav-item">
            <div className="px-3 py-2 flex items-center  uppercase font-bold leading-snug text-white hover:opacity-75">
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" />
              <NavLink to="/basketballFE/players">Players</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75">
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <NavLink to="/basketballFE/games">Games</NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-white hover:opacity-75">
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <NavLink to="/basketballFE/about">About</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
