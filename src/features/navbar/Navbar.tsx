import React from "react"
import { NavLink } from "react-router-dom"
import burgerImg from "../../images/burger.svg"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className="w-full flex flex-row  px-4 py-3 bg-slate-900 justify-between mb-3 sm:flex-col">
      <div className="items-center w-full flex flex-row justify-between">
        {/*NBA LOGO*/}
        <div className="justify-start w-fit">
          <NavLink to="/basketballFE/">
            <img
              src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
              className=" h-[30px]"
              alt="NBA Logo"
            />
          </NavLink>
        </div>
        {/*NBA LOGO*/}

        {/*NavLinks*/}
        <div
          className={"  self-center " + (navbarOpen ? " flex" : " collapse")}
          id="example-navbar-danger"
        >
          <div className="lg:grid lg:justify-items-end">
            <ul className=" flex flex-col lg:visible  lg:place-self-end lg:flex-row list-none text-lg ">
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
        </div>
        {/*Burger Icon Logo*/}
        <div className="">
          <button
            className="text-white bg-white border-white cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <img className="h-8" src={burgerImg} />
          </button>
        </div>
        {/*Burger Icon Logo*/}
      </div>
    </nav>
  )
}
