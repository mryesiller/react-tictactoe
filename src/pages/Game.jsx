import React, { Fragment, useEffect } from "react"
import Board from "../components/molecules/Board"
import useGameStore from "../context/gameStore"
import { Modal, Player, Header } from "../components/atoms"

const Game = () => {
  var {
    gameHistory,
    nextPlayer,
    move,
    startGame,
    player1,
    player2,
    setGameStatus,
    setWinner,
    winner,
    gameOver,
    backdropStatus,
  } = useGameStore()

  const handleClick = (i) => {
    const current = gameHistory[gameHistory.length - 1]
    const squares = current.squares.slice()
    const win = calculateWinner(squares)
    if (win || squares[i]) {
      return
    }
    squares[i] = nextPlayer ? "X" : "O"
    move(squares)
  }

  const current = gameHistory[gameHistory.length - 1]
  const win = calculateWinner(current.squares)

  useEffect(() => {
    if (win === "X") {
      winner = player1
      setWinner(winner)
    }
    if (win === "O") {
      winner = player2
      setWinner(winner)
    }
    if (win === "D") {
      winner = "DESK"
      setWinner(winner)
    }
  }, [win])

  return (
    <Fragment>
      <div className={backdropStatus ? "backdrop" : "backdrop disabled"}></div>
      <Header />
      <main>
        <Modal />
        <section id="game-configuration">
          <ol>
            <li>
              <Player symbol={"X"} playerName={player1} />
            </li>
            <li>
              <Player symbol={"O"} playerName={player2} />
            </li>
          </ol>
          {startGame ? (
            gameOver ? (
              <div>
                <p className="winner-banner">Winner is {winner}</p>

                <button
                  onClick={() => window.location.reload()}
                  className="btn"
                  id="start-btn"
                >
                  Turn Home
                </button>
              </div>
            ) : (
              <p className="winner-banner">
                {nextPlayer ? player1 : player2} your turn
              </p>
            )
          ) : (
            <button onClick={setGameStatus} className="btn" id="start-btn">
              Start New Game
            </button>
          )}
        </section>
      </main>
      <section id="active-game">
        <Board square={current.squares} onClick={(i) => handleClick(i)} />
      </section>
    </Fragment>
  )
}

const calculateWinner = (squares) => {
  const winnerLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  let isDraw = true
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i]
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]
    }
    if (!squares[a] || !squares[b] || !squares[c]) {
      isDraw = false
    }
  }
  if (isDraw) return "D"
  return null
}

export default Game
