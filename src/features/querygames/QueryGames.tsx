import { useEffect, useState } from "react"

import { useQuery, useQueryClient } from "react-query"
import { Game } from "../../types/Game"

//const maxGamesPerPage = 10

const fetchGames = async (pageNum: number) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/games?page=${pageNum}`,
  )
  return response.json()
}

export function QueryGames() {
  const [currentPage, setCurrentPage] = useState(1)

  const queryClient = useQueryClient()

  useEffect(() => {
    const nextPage = currentPage + 1
    queryClient.prefetchQuery(["Games", nextPage], () =>
      fetchGames(currentPage),
    )
  }, [currentPage, queryClient])

  const { isLoading, error, data } = useQuery(
    ["Games", currentPage],
    () => fetchGames(currentPage),
    {
      staleTime: 200,
      keepPreviousData: true,
    },
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <div className="h-screen flex flex-col items-center my-4">
      <div className="grid grid-cols-1 h-64 overflow-y-scroll  justify-center justify-items-center mb-1 p-2 bg-slate-800 text-center text-white text-xs font-bold font-mono md:grid-cols-2 lg:grid-cols-3 sm:h-96 sm:overflow-y-scroll sm:grid-cols-2 w-3/4 border border-x border-black">
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
              return <h1 key={game.id}>{game.home_team.full_name}</h1>
            })}
            {/*<h3>{data.data[0].first_name}</h3>*/}
            {/*{console.log(data.data[0].first_name)}*/}
            {/*<img src={data.sprites.front_shiny} alt={data.species.name} />*/}
          </>
        ) : null}
      </div>
      <div className="flex flex-col w-3/4  px-2 justify-center items-center text-center  text-white bg-slate-900 md:flex-row ">
        <button
          onClick={() => setCurrentPage((previousValue) => previousValue - 1)}
          className="hover:bg-black w-52 h-16"
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="mx-10">{currentPage}</span>
        <button
          onClick={() => setCurrentPage((previousValue) => previousValue + 1)}
          className=" hover:bg-black w-52 h-16"
        >
          Next
        </button>
      </div>
    </div>
  )
}
