import React from "react"
import useGameStore from "../../context/gameStore"

const Modal = () => {
  const { modalStatus, backdropStatus, player, setPlayer1, setPlayer2 } =
    useGameStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    const fromData = new FormData(e.target)
    const name = fromData.get("playername")
    console.log(player)
    console.log(name)
    if (player === "X") {
      setPlayer1(name)
    } else {
      setPlayer2(name)
    }
    e.target.playername.value = " "
    useGameStore.setState({ modalStatus: !modalStatus })
    useGameStore.setState({ backdropStatus: !backdropStatus })
  }

  return (
    <aside
      className={modalStatus ? "modal disabled" : "modal"}
      id="config-overlay"
    >
      <h2>Choose your name</h2>
      <form className="form-control" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="playername">Player Name:</label>
          <input type="text" id="playername" name="playername" />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-alt"
            onClick={() => {
              useGameStore.setState({ modalStatus: !modalStatus })
              useGameStore.setState({ backdropStatus: !backdropStatus })
            }}
          >
            Cancel
          </button>
          <button type="submit" className="btn">
            Confirm
          </button>
        </div>
      </form>
    </aside>
  )
}

export default Modal
