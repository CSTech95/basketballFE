import { useEffect } from "react"

import StatFeature from "./StatFeature"
import { Game } from "../../types/Game"
import { useQuery, useQueryClient } from "react-query"

const fetchGames = async () => {
  const response = await fetch(`https://www.balldontlie.io/api/v1/games`)
  return response.json()
}

export function StatSlideshow() {
  const queryClient = useQueryClient()

  useEffect(() => {
    queryClient.prefetchQuery("Games", () => fetchGames())
  }, [queryClient])

  const { isLoading, error, data } = useQuery(["Games"], () => fetchGames(), {
    staleTime: 200,
    keepPreviousData: true,
  })

  //const [games, setGames] = useState(initialState)

  //  const { data, error, isLoading } = useGetAllGamesQuery(" ")

  //  useEffect(() => {
  //    function handleResize() {
  //      console.log(
  //        `Resized to ${window.innerWidth}, X & ${window.innerHeight}, Y`,
  //      )
  //    }

  //    window.addEventListener("resize", handleResize)
  //  }, [])

  return (
    <div className="shadow-xl p-1 pr-0">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className=" h-40 md:h-48 md:pb-0 flex overflow-x-scroll">
          {data.data.map(function (game: Game) {
            console.log(game)
            return <StatFeature key={game.id} game={game} />
          })}
        </div>
      ) : null}
    </div>
  )
}
