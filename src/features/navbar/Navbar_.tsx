import React from "react"
import { NavLink } from "react-router-dom"
import burgerImg from "../../images/burger.svg"

export default function Navbar_() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 border border-black rounded-b-2xl mb-3">
        <div className="container px-2  flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-2 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <NavLink to="/basketballFE/">
                <img
                  src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
                  className="flex h-[30px]"
                />
              </NavLink>
            </a>
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
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <NavLink to="/basketballFE/players">Players</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <NavLink to="/basketballFE/games">Games</NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <NavLink to="/basketballFE/about">About</NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
