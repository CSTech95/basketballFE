import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { Navbar } from "./features/navbar/Navbar"
import { QueryClient, QueryClientProvider } from "react-query"
import { StatSlideshow } from "./features/statSlideshow/StatSlideshow"
import { useGetAllPlayersQuery } from "./features/counter/nba-query"
import QueryPlayers from "./features/queryPlayers/QueryPlayers"
import { QueryGames } from "./features/querygames/QueryGames"
import { Footer } from "./features/footer/Footer"
import StatFeatures from "./features/statSlideshow/StatFeatures"
import StatFeature from "./features/statSlideshow/StatFeature"
const queryClient = new QueryClient()

function App() {
  const API_URL = "http://localhost:8080/api/fetch?mobileNumber=1234567890"

  //  const API_URL = "https://rickandmortyapi.com/api/character"
  const { data, error, isLoading } = useGetAllPlayersQuery("")

  //  const helper: any = async () => {
  //    try {
  //      const res = await fetch(API_URL, {
  //        method: "GET",
  //        headers: {
  //          "Content-Type": "application/json",
  //        },
  //      })
  //        .then((response) => response.json())
  //        .then((data: any) => {
  //          console.log(data)
  //        })
  //    } catch (error) {
  //      console.log(error)
  //    }
  //  }

  return (
    <div className="flex flex-col">
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="mb-auto">
          <StatSlideshow />
          <div className="grid grid-cols-1 grid-gap-4 border border-black md:grid-cols-2">
            <QueryPlayers />
            <QueryGames />
          </div>
          <div className="h-[1196px] bg-green"></div>
        </div>
        <Footer />
      </QueryClientProvider>
    </div>
  )
}

export default App
