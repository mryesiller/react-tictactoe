import React from "react"
import { Square } from "../atoms"
import useGameStore from "../../context/gameStore"

const Board = ({ square, onClick }) => {
  const { gameHistory, startGame } = useGameStore()

  const current = gameHistory[gameHistory.length - 1]
  const squares = current.squares.slice()
  return (
    <ol className={startGame ? "game-board" : "game-board disabled"}>
      {squares?.map((value, index) => (
        <Square
          key={index}
          value={square[index]}
          clickFunction={() => {
            onClick(index)
          }}
        />
      ))}
    </ol>
  )
}

export default Board
