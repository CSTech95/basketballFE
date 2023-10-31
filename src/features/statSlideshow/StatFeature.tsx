import React from "react"
import moment from "moment"
//import { Game } from "../../types/game"

//interface Props {
//  game: Game
//}

const StatFeature = ({ game }: any) => {
  const homeScore = game.home_team_score
  const visitorScore = game.visitor_team_score
  //  console.log(game)
  let theDate = moment(game.date).format("MMMM Do YYYY, h:mm:ss a")
  //  theDate = theDate.toISOString()

  return (
    <div className="flex flex-col rounded-t-lg bg-slate-900 text-white border-black leading-loose font-mono subpixel-antialiased text-center m-1 hover:40 hover:bg-zinc-700">
      <p className="pt-2 mb-auto">{theDate}</p>
      <div className="w-80 flex flex-row justify-center  p-2 align-center space-x-2">
        <div className="flex flex-col w-full text-center flex-wrap ">
          <p className="text-sm tracking-wide  ">{game.home_team.full_name}</p>
          {homeScore > visitorScore ? (
            <p className="text-green ">{game.home_team_score}</p>
          ) : (
            <p className="text-red-500 text-base/7">{game.home_team_score}</p>
          )}
        </div>
        {/*<span className="text-xl text-base/7">VS</span>*/}
        <div className="flex flex-col w-full text-center">
          <p className="text-sm tracking-wide  ">
            {game.visitor_team.full_name}
          </p>
          {/*<p className="">{game.visitor_team_score}</p>*/}
          {homeScore < visitorScore ? (
            <p className="text-green  ">{game.visitor_team_score}</p>
          ) : (
            <p className="text-red-500  ">{game.visitor_team_score}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default StatFeature
