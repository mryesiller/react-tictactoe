import React from "react"
import useGameStore from "../../context/gameStore"

const Player = ({ symbol, playerName }) => {
  const { modalStatus, backdropStatus, setPlayer } = useGameStore()

  const handleClick = (e) => {
    e.preventDefault()
    setPlayer(symbol)
    useGameStore.setState({ modalStatus: !modalStatus })
    useGameStore.setState({ backdropStatus: !backdropStatus })
  }

  return (
    <article>
      <h2>Player Name</h2>
      <h3>{playerName}</h3>
      <p id="player-symbol">{symbol}</p>
      <button className="btn" onClick={handleClick}>
        Edit
      </button>
    </article>
  )
}

export default Player
