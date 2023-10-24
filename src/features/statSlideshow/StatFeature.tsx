import React from "react"
import moment from "moment"
import { Game } from "../../types/game"

interface Props {
  game: Game
}

const StatFeature = ({ game }: Props) => {
  console.log(game)
  let theDate = moment(game.date).format("MMMM Do YYYY, h:mm:ss a")
  //  theDate = theDate.toISOString()
  return (
    <div className="grid p-2 border rounded bg-stone-950 text-white border-black text-xs  font-mono subpixel-antialiased text-center m-1">
      <h3 className="">{theDate}</h3>
      <div className="flex flex-row gap-4 w-44 pt-4 ">
        <div className="">
          <div className="">{game.home_team.full_name}</div>
          <div className="">{game.home_team_score}</div>
        </div>
        <div>
          <div className="">{game.visitor_team.full_name}</div>
          <div className="">{game.visitor_team_score}</div>
        </div>
      </div>
    </div>
  )
}

export default StatFeature
