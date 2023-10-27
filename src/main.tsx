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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
