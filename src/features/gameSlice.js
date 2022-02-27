import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //store user choice of weapon and random weapon for computer
  weapon:{
    player: '',
    computer: '',
  },
  //initial result is set to 0
  result: 0,
  newGame: false,
  playerMove:'',
  computerMove:'',
  showModal: false,
  //enables conditional rendering of GameResult or SelectWeapon
  play: false,
  winner:'',
  message:''
}

export const gameSlice = createSlice({
  name:'game',
  initialState,
  reducers:{
      selectWeapon: (state, action) => {
          state.weapon = action.payload
      },
      setResult: (state, action) => {
          state.result = action.payload
      },
      setPlayerMove: (state,action) => {
        state.playerMove = action.payload
      },
      setComputerMove: (state, action) => {
        state.computerMove = action.payload
      },
      openModal:(state, action) => {
        state.showModal = action.payload
      },
      play:(state, action) => {
        state.play = action.payload
      },
      setWinner:(state, action) => {
        state.winner = action.payload
      },
      setMessage:(state, action) => {
        state.message = action.payload
      }
  }
   
})

export const getWeapon = (state) => state.game.weapon
export const getScore = (state) => state.game.result
export const getModal = (state) => state.game.showModal
export const getPlayStatus = (state) => state.game.play
export const getWinner = (state) => state.game.winner
export const getMessage = (state) => state.game.message


export const {
  selectWeapon,
  setResult,
  setPlayerMove,
  setComputerMove,
  openModal,
  play,
  setWinner,
  setMessage
} = gameSlice.actions
export default gameSlice.reducer