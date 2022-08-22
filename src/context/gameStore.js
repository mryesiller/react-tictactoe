import create from "zustand"

const initialState = {
  gameHistory: [{ squares: Array(9).fill(null) }],
  player: null,
  player1: "Player 1",
  player2: "Player 2",
  nextPlayer: true,
  winner: null,
  startGame: false,
  gameOver: false,
  modalStatus: true,
  backdropStatus: false,
}

const useGameStore = create((set) => ({
  ...initialState,
  setPlayer: (player) => {
    set((state) => ({ player: player }))
  },
  setPlayerName: (playerName, player) => {
    if (player === "X") {
      set((state) => ({ player1: playerName }))
    } else {
      set((state) => ({ player2: playerName }))
    }
  },
  setGameStatus: () => set((state) => ({ startGame: !state.startGame })),
  setWinner: (winnerPLayer) =>
    set((state) => ({ winner: winnerPLayer, gameOver: !state.gameOver })),
  move: (payload) =>
    set((state) => ({
      ...state,
      gameHistory: state.gameHistory.concat({
        squares: payload,
      }),
      nextPlayer: !state.nextPlayer,
    })),
  resetGame: () => set({ ...initialState }),
}))

export default useGameStore
