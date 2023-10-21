import { useState } from "react"
import { useQuery } from "react-query"

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
    <div className="flex flex-col items-center my-4">
      <div className="grid grid-cols-1 h-80 overflow-y-scroll my-auto justify-center justify-items-center p-2 bg-white text-xs font-bold font-mono md:grid-cols-2 lg:grid-cols-3 sm:h-48 sm:overflow-y-scroll sm:grid-cols-2 w-3/4 border border-x">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {/*{console.log(data.data[0].first_name)}*/}
            {data.data.map(function (player: any) {
              //  console.log(player)
              return <h1>{`${player.first_name},${player.last_name} `}</h1>
            })}
          </>
        ) : null}
      </div>
      <div className="flex flex-col w-3/4 mt-2 px-2 justify-center items-center text-center  text-black bg-gray-400 md:flex-row ">
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
