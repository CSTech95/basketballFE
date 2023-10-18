import { useState } from "react"

import { useAppSelector, useAppDispatch } from "../../app/hooks"
//import {
//  decrement,
//  increment,
//  incrementByAmount,
//  incrementAsync,
//  incrementIfOdd,
//  selectCount,
//} from "./counterSlice"
//import styles from "./Counter.module.css"

export function Navbar() {
  //  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div className="flex flex-row justify-between h-[55px] px-4 bg-black  w-full md:w-auto">
      <div className="flex align-center items-center">
        <img
          src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
          className="flex h-[30px]"
        />
      </div>
      <div className=" text-white items-center flex order-last">
        <button className="order-last">Sign In</button>
      </div>
    </div>
  )
}
