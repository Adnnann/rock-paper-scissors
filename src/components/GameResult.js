import Item from '@mui/material/Grid';
import { Grid } from "@mui/material"
import PlayerMove from "./PlayerMove"
import PlayAgainButton from "./PlayAgain"
import ComputerMove from "./ComputerMove"
import { useEffect } from 'react';
import { getPlayStatus, getScore, getWeapon, setResult } from '../features/gameSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const GameResult = () => {

    const dispatch = useDispatch()
    const weapon = useSelector(getWeapon)
    const score = useSelector(getScore)
    const gameStatus = useSelector(getPlayStatus)

    useEffect(() => {
        //save result in localStorage and state
        if(weapon.player === 'rock' && weapon.computer === 'scissors'){
            dispatch(setResult(score+1))
            localStorage.setItem('gameResult', score+1)
        }else if(weapon.player === 'scissors' && weapon.computer === 'rock'){
            dispatch(setResult(score-1))
            localStorage.setItem('gameResult', score-1)
        }else if(weapon.player === 'scissors' && weapon.computer === 'paper'){
            dispatch(setResult(score+1))
            localStorage.setItem('gameResult', score+1)
        }else if(weapon.player === 'paper' && weapon.computer === 'scissors'){
            dispatch(setResult(score-1))
            localStorage.setItem('gameResult', score-1)
        }else if(weapon.player === 'paper' && weapon.computer === 'rock'){
            dispatch(setResult(score+1))
            localStorage.setItem('gameResult', score+1)
        }else if(weapon.player === 'rock' && weapon.computer === 'paper'){
            dispatch(setResult(score-1))
            localStorage.setItem('gameResult', score-1)
        }
        //use gameStatus as dependency for useEffect
    }, [gameStatus])
    
    return(
        <>
        <Grid item>
            <Item>
                <PlayerMove />
            </Item>
        </Grid>

        <Grid item>
            <Item>
               <PlayAgainButton /> 
            </Item>
        </Grid>

        <Grid item>
            <Item>
                <ComputerMove />
            </Item>
        </Grid>  
    </>
    )
}

export default GameResult