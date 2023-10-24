import { useEffect, useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { useGetAllGamesQuery } from "../counter/nba-query"
import StatFeature from "./StatFeature"
import { Game } from "../../types/game"

export function StatSlideshow() {
  const { data, error, isLoading } = useGetAllGamesQuery("")
  //  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  //  const [incrementAmount, setIncrementAmount] = useState("2")

  //  const incrementValue = Number(incrementAmount) || 0

  useEffect(() => {
    function handleResize() {
      console.log(
        `Resized to ${window.innerWidth}, X & ${window.innerHeight}, Y`,
      )
    }

    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex flex-row h-44 shadow-xl bg-gradient-to-r from-zinc-800 to-zinc-700 overflow-x-scroll p-1">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {/*{console.log(data.data[0].first_name)}*/}
          {data.data.map(function (game: Game) {
            console.log(game)
            //return <h1>{`${players.first_name},${players.last_name} `}</h1>
            return <StatFeature game={game} />
          })}
          {/*<h3>{data.data[0].first_name}</h3>*/}
          {/*{console.log(data.data[0].first_name)}*/}
          {/*<img src={data.sprites.front_shiny} alt={data.species.name} />*/}
        </>
      ) : null}
      <div className=" "></div>
    </div>
  )
}
