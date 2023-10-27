import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./features/home/Home"
import QueryPlayers from "./features/queryPlayers/QueryPlayers"
import { QueryGames } from "./features/querygames/QueryGames"
import { QueryClient, QueryClientProvider } from "react-query"
import Cover from "./features/cover/Cover"
import { StatSlideshow } from "./features/statSlideshow/StatSlideshow"
import MyComponent from "./features/samples/MyComponent"

const router = createBrowserRouter([
  {
    path: "/basketballFE",
    element: <Home />,
    children: [
      {
        path: "/basketballFE",
        element: (
          <div>
            <StatSlideshow />
            <Cover />
            <div className="h-[1196px] bg-stone-950 my-1">
              <MyComponent />
            </div>
          </div>
        ),
      },
      {
        path: "/basketballFE/about",
        element: <h1>About</h1>,
      },
      {
        path: "/basketballFE/players",
        element: <QueryPlayers />,
      },
      {
        path: "/basketballFE/games",
        element: <QueryGames />,
      },
    ],
  },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
