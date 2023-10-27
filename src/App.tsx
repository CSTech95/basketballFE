import "./App.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Navbar } from "./features/navbar/Navbar"
import { QueryClient, QueryClientProvider } from "react-query"
import { StatSlideshow } from "./features/statSlideshow/StatSlideshow"
import QueryPlayers from "./features/queryPlayers/QueryPlayers"
import { QueryGames } from "./features/querygames/QueryGames"
import { Footer } from "./features/footer/Footer"
import MyComponent from "./features/samples/MyComponent"
import Cover from "./features/cover/Cover"
import Home from "./features/home/Home"
//const queryClient = new QueryClient()

//const router = createBrowserRouter([
//  {
//    path: "/",
//    element: <Home />,
//  },
//  {
//    path: "/about",
//    element: <h1>About</h1>,
//  },
//  {
//    path: "/players",
//    element: <QueryPlayers />,
//  },
//  {
//    path: "/games",
//    element: <QueryGames />,
//  },
//])

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {/*<StatSlideshow />
      <Cover />
      <div className="grid grid-cols-1 grid-gap-4 border border-black md:grid-cols-2">
        <QueryPlayers />
        <QueryGames />
      </div>
      <div className="h-[1196px] bg-stone-950">
        <MyComponent />
      </div>*/}
      <div className="mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App

//  <RouterProvider router={router}>
//      <div className="flex flex-col">
//        <QueryClientProvider client={queryClient}>
//          <Navbar />
//          <div className="mb-auto">
//            <StatSlideshow />
//            <Cover />
//            <div className="grid grid-cols-1 grid-gap-4 border border-black md:grid-cols-2">
//              <QueryPlayers />
//              <QueryGames />
//            </div>
//            <div className="h-[1196px] bg-stone-950">
//              <MyComponent />
//            </div>
//          </div>
//          <Footer />
//        </QueryClientProvider>
//      </div>
//    </RouterProvider>
