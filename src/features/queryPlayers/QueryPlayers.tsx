import { useState } from "react"
import { useQuery } from "react-query"
import PlayerTableDetails from "../playerTable/PlayerTableDetails"
import { Player } from "../../types/Player"

const fetchPlayers = async (pageNum: number) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=${pageNum}`,
  )
  return response.json()
}

function QueryPlayers() {
  const [currentPage, setCurrentPage] = useState(1)

  const { isLoading, error, data } = useQuery(
    ["playersData", currentPage],
    () => fetchPlayers(currentPage),
    {
      staleTime: 200,
      keepPreviousData: true,
    },
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <div className="flex flex-col items-center w-screen">
      <div className="flex justify-center items-center w-[90%] m-1 sm:m-4 md:m-2">
        <table className="text-center w-full table-auto ">
          <thead>
            <tr className="text-xs sm:text-sm md:text-base lg:text-lg">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Height (ft)</th>
              <th>Weight (lbs)</th>
              <th>Position</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                {data.data.map(function (player: Player) {
                  console.log(player)
                  return <PlayerTableDetails player={player} />
                })}
              </>
            ) : null}
          </tbody>
        </table>
      </div>
      <div className="w-[90%] flex flex-row  px-2 justify-center items-center text-center  text-black bg-gray-400 md:flex-row ">
        <button
          onClick={() => setCurrentPage((previousValue) => previousValue - 1)}
          className="hover:bg-slate-700 w-52 h-16"
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="mx-10">{currentPage}</span>
        <button
          onClick={() => setCurrentPage((previousValue) => previousValue + 1)}
          className=" hover:bg-slate-700 w-52 h-16"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default QueryPlayers
