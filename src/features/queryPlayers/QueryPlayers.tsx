import { useQuery } from "react-query"

function QueryPlayers() {
  const { isLoading, error, data } = useQuery("playersData", () =>
    fetch("https://www.balldontlie.io/api/v1/players").then((res) =>
      res.json(),
    ),
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  return (
    <>
      <div className="grid grid-cols-3 auto-cols-max p-4 bg-white font-bold font-mono">
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
            {/*<h3>{data.data[0].first_name}</h3>*/}
            {/*{console.log(data.data[0].first_name)}*/}
            {/*<img src={data.sprites.front_shiny} alt={data.species.name} />*/}
          </>
        ) : null}
      </div>
      {/*{helper()}*/}
    </>
  )
}

export default QueryPlayers
