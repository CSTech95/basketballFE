import { useEffect, useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { useGetAllGamesQuery } from "../counter/nba-query"
import StatFeature from "./StatFeature"
import { Game } from "../../types/Game"

export function StatSlideshow() {
  const { data, error, isLoading } = useGetAllGamesQuery("")

  useEffect(() => {
    function handleResize() {
      console.log(
        `Resized to ${window.innerWidth}, X & ${window.innerHeight}, Y`,
      )
    }

    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div className="shadow-xl   p-1 pr-0">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className=" h-40 md:h-48 md:pb-0 flex overflow-x-scroll">
          {/*{console.log(data.data[0].first_name)}*/}
          {data.data.map(function (game: Game) {
            console.log(game)
            return <StatFeature key={game.id} game={game} />
          })}
        </div>
      ) : null}
    </div>
  )
}
