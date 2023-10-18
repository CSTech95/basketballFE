import React from "react"
import moment from "moment"

const StatFeature = ({ game }) => {
  console.log(game)
  let theDate = moment(game.date).format("MMMM Do YYYY, h:mm:ss a")
  //  theDate = theDate.toISOString()
  return (
    <div className="grid p-2 border rounded border-black text-xs bg-amber-100 font-mono font-bold text-center">
      <h3 className="">{theDate}</h3>
      <div className="flex flex-row gap-4 w-44 pt-4 font-bold">
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
