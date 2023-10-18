// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//import type { Pokemon } from "./types"

// Define a service using a base URL and expected endpoints
export const ballDontLieApi = createApi({
  reducerPath: "ballDontLieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.balldontlie.io/api/v1/" }),
  endpoints: (builder) => ({
    getAllPlayers: builder.query<any, string>({
      query: (name) => `players?search=${name}&per_page=100`,
    }),
    getAllGames: builder.query<any, string>({
      query: (name) => `games`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPlayersQuery, useGetAllGamesQuery } = ballDontLieApi
