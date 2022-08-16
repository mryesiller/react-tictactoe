import create from "zustand"

const useGameStore = create((set) => ({
  gameHistory: [{ squares: Array(9).fill(null) }],
  player: null,
  setPlayer: (player) => {
    set((state) => ({ player: player }))
  },
  player1: "Player 1",
  player2: "Player 2",
  setPlayer1: (playerName) => set((state) => ({ player1: playerName })),
  setPlayer2: (playerName) => set((state) => ({ player2: playerName })),
  nextPlayer: true,
  winner: null,
  startGame: false,
  gameOver: false,
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
  modalStatus: true,
  backdropStatus: false,
}))

export default useGameStore
