import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./features/home/Home"
import QueryPlayers from "./features/queryPlayers/QueryPlayers"
import { QueryGames } from "./features/querygames/QueryGames"
import { QueryClient, QueryClientProvider } from "react-query"
import { Navbar } from "./features/navbar/Navbar"
import { StatSlideshow } from "./features/statSlideshow/StatSlideshow"
import Cover from "./features/cover/Cover"
import MyComponent from "./features/samples/MyComponent"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <div className="flex flex-col">
            <StatSlideshow />
            <Cover />
            <div className="grid grid-cols-1 grid-gap-4 border border-black md:grid-cols-2">
              <QueryPlayers />
              <QueryGames />
            </div>
            <div className="h-[1196px] bg-stone-950 border">
              <MyComponent />
            </div>
          </div>
        ),
      },
      {
        path: "about",
        element: <h1>About</h1>,
      },
      {
        path: "players",
        element: <QueryPlayers />,
      },
      {
        path: "games",
        element: <QueryGames />,
      },
    ],
  },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
