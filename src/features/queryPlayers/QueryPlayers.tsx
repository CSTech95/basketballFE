import { useState } from "react"
import { useQuery } from "react-query"
import PlayerTableDetails from "../playerTable/PlayerTableDetails"
import { Player } from "../../types/Player"

function QueryPlayers() {
  const [currentPage, setCurrentPage] = useState(1)
  const [playerName, setPlayerName] = useState("")

  const fetchPlayers = async (playerName: string, pageNum: number) => {
    const response = await fetch(
      `https://www.balldontlie.io/api/v1/players?search=${playerName}&page=${pageNum}`,
    )
    return response.json()
  }

  const handleChange = (event: any) => {
    console.log(event.target.value)
    setCurrentPage(1)
    setPlayerName(event.target.value)
  }

  const { isLoading, error, data } = useQuery(
    ["playersData", currentPage, "playerName", playerName],
    () => fetchPlayers(playerName, currentPage),
    {
      //  staleTime: 200,
      keepPreviousData: true,
    },
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row w-full mr-10 mb-4 justify-end">
        <input
          className="pl-2 border border-black"
          onChange={handleChange}
          placeholder="Search"
        />
      </div>

      <div className="flex justify-center items-center w-[90%] m-1 sm:m-4 md:m-2 ">
        <table className="text-center w-full table-auto ">
          <thead>
            <tr className="text-xs sm:text-sm md:text-base lg:text-lg">
              <th>First Name</th>
              <th>Last Name</th>
              <th className="collapse sm:visible">Height (ft)</th>
              <th className="collapse sm:visible">Weight (lbs)</th>
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
                  //  console.log(player)
                  return <PlayerTableDetails player={player} />
                })}
              </>
            ) : null}
          </tbody>
        </table>
      </div>
      <div className="w-[90%] flex flex-row  m-2 justify-center items-center text-center  text-black bg-gray-400 md:flex-row ">
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
