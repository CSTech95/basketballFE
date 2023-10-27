import { Link, NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <nav className="rounded-b-2xl flex flex-row justify-between h-[55px] px-4  bg-zinc-950  w-full md:w-auto">
      <div className="flex align-center items-center">
        <NavLink to="/basketballFE">
          <img
            src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
            className="flex h-[30px]"
          />
        </NavLink>
      </div>

      <div className=" text-white items-center flex order-last space-x-7">
        {/*<button className="order-last">Sign In</button>*/}
        {/*<NavLink to="/teams">Teams</NavLink>*/}
        <NavLink to="/basketballFE/players">Players</NavLink>
        <NavLink to="/basketballFE/games">Games</NavLink>
        {/*<NavLink to="/stats">Stats</NavLink>*/}
      </div>
    </nav>
  )
}
