import { Link, NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="flex flex-row justify-between h-[55px] px-4 bg-zinc-950  w-full md:w-auto">
      <div className="flex align-center items-center">
        <img
          src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
          className="flex h-[30px]"
        />
      </div>

      <div className=" text-white items-center flex order-last">
        {/*<button className="order-last">Sign In</button>*/}
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/players">Players</NavLink>
      </div>
    </nav>
  )
}
