import { useEffect, useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { useQuery } from "react-query"

//useEffect(() => {
//  function handleResize() {
//    console.log(`Resized to ${window.innerWidth}, X & ${window.innerHeight}, Y`)
//  }

//  window.addEventListener("resize", handleResize)
//}, [])

//const maxGamesPerPage = 10

const fetchGames = async (pageNum: number) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/games?page=${pageNum}`,
  )
  return response.json()
}

export function QueryGames() {
  const [currentPage, setCurrentPage] = useState(1)

  const { isLoading, error, data } = useQuery(
    ["Games", currentPage],
    () => fetchGames(currentPage),
    {
      staleTime: 200,
    },
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 text-white shadow-xl bg-slate-800 p-4">
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
      </div>
      <div className="flex flex-col justify-between px-6 text-white bg-slate-900 md:flex-row">
        <button
          onClick={() => setCurrentPage((previousValue) => previousValue - 1)}
          className="hover:bg-black w-[50%]"
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => setCurrentPage((previousValue) => previousValue + 1)}
          className=" hover:bg-black w-[50%]"
        >
          Next
        </button>
      </div>
    </div>
  )
}
