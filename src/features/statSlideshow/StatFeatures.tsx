import React from "react"
import moment from "moment"
import { useQuery } from "react-query"

type Error = {
  message: string
  stack?: string
}

const StatFeatures = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://www.balldontlie.io/api/v1/games").then((res) => res.json()),
  )

  if (isLoading) return "Loading..."

  if (error) return "An error has occurred: " + error

  console.log(data)

  return (
    <div className="grid p-2 border text-xs  font-mono font-bold text-center">
      <p className="text-white">Reached</p>
    </div>
  )
}

export default StatFeatures
