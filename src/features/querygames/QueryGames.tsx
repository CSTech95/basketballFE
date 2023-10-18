import { useEffect, useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { useQuery } from "react-query"

//useEffect(() => {
//  function handleResize() {
//    console.log(`Resized to ${window.innerWidth}, X & ${window.innerHeight}, Y`)
//  }

//  window.addEventListener("resize", handleResize)
//}, [])

export function QueryGames() {
  const { isLoading, error, data } = useQuery("gamesData", () =>
    fetch("https://www.balldontlie.io/api/v1/games").then((res) => res.json()),
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <div className="grid grid-cols-3 text-white shadow-xl bg-slate-900 p-4">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {/*{console.log(data.data[0].first_name)}*/}
          {data.data.map(function (game: any) {
            console.log(game)
            //return <h1>{`${players.first_name},${players.last_name} `}</h1>
            return <h1>{game.home_team.full_name}</h1>
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
