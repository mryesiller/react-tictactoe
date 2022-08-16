import React from "react"
import useGameStore from "../../context/gameStore"

const Square = ({ value, clickFunction }) => {
  const { winner } = useGameStore()

  return (
    <li className={winner ? "disabled" : ""} onClick={clickFunction}>
      {value}
    </li>
  )
}

export default Square
