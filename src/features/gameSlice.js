import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weapon:{
    weapon1: 'scissors',
    weapn2: 'rock',
    weapon3: 'paper'
  },
  result: 0,
  newGame: false,
  playerMove:'',
  computerMove:''
}

export const gameSlice = createSlice({
  name:'game',
  initialState,
  reducers:{
      selectWeapon: (state, payload) => {
          state.weapon = payload
      },
      setResult: (state, payload) => {
          state.result = payload
      },
      setPlayerMove: (state,payload) => {
        state.playerMove = payload
      },
      setComputerMove: (state, payload) => {
        state.computerMove = payload
      }
  }
   
})

export const getWeapon = (state) => state.weapon

export const {
  selectWeapon,
  setResult,
  setPlayerMove,
  setComputerMove
} = gameSlice.actions
export default gameSlice.reducer