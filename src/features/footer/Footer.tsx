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

export function Footer() {
  //  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <div className="flex flex-row-reverse justify-between h-[75px]  bg-black  w-full ">
      <img
        src="https://cdn.nba.com/logos/leagues/logo-nba.svg"
        className="flex align-center items-center px-4 h-[30px]"
      />
    </div>
  )
}
