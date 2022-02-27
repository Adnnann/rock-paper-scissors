import { Grid, Typography } from "@mui/material";
import Item from '@mui/material/Grid';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {getPlayStatus, 
        getScore, 
        getWeapon, 
        setWinner, 
        setMessage, 
        getWinner, 
        getMessage,
        setResult
} from "../features/gameSlice";
import { makeStyles } from "@mui/styles"
import RulesButton from "./RulesButton";
import RulesModal from "./RulesModal";
import SelectWeapon from "./SelectWeapon";
import GameResult from "./GameResult";

const useStyles = makeStyles({
    score:{
        bottom:'0',
        padddingLeft:10
    }
})

const Game = () => {
    const classes = useStyles()
    const storedScore = useSelector(getScore)
    const weapon = useSelector(getWeapon)
    const play = useSelector(getPlayStatus)
    const dispatch = useDispatch()
    const winner = useSelector(getWinner)
    const message = useSelector(getMessage)

    useEffect(()=>{
        //get result from localstorage
        const storedResult = window.localStorage.getItem('gameResult')
        //if there is not gameResult in localStorage initiate one
        if(!storedResult){
            window.localStorage.setItem('gameResult', '')
        }else{
            //if there is stored result save it in Redux store
            //Number function is very important to prevent saving numeric value as string in redux state
            dispatch(setResult(Number(storedResult)))
        }  
    },[])

    //check all possible combinations and dispatch winner and applicable message
    if(weapon.player === 'rock' && weapon.computer === 'scissors'){
        dispatch(setWinner('You win'))
        dispatch(setMessage('Rock breaks scissors'))
    }else if(weapon.player === 'scissors' && weapon.computer === 'rock'){
        dispatch(setWinner('You lose'))
        dispatch(setMessage('Rock breaks scissors'))
    }else if(weapon.player === 'scissors' && weapon.computer === 'paper'){
        dispatch(setWinner('You win'))
        dispatch(setMessage('Scissors cut paper'))
    }else if(weapon.player === 'paper' && weapon.computer === 'scissors'){
        dispatch(setWinner('You lose'))
        dispatch(setMessage('Scissors cut paper'))
    }else if(weapon.player === 'paper' && weapon.computer === 'rock'){
        dispatch(setWinner('You win'))
        dispatch(setMessage('Paper covers rock'))
    }else if(weapon.player === 'rock' && weapon.computer === 'paper'){
        dispatch(setWinner('You lose'))
        dispatch(setMessage('Paper covers rock'))
    }else{
        dispatch(setWinner('Tie!'))
        dispatch(setMessage(''))
    }

    return(
        <Grid container justifyContent={'center'}>

          <Grid item xs={6} md={6} lg={6} xl={6} marginTop={2} textAlign={'center'}>
            <Item>
                <Typography variant='h4'>
                    Score: {storedScore}
                </Typography>
            </Item>
          </Grid>

          <Grid item xs={5} md={5} lg={5} xl={5} marginTop={1} textAlign={'center'}>
            <Item>
                <RulesButton />
            </Item>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={12} textAlign={'center'}>
            <Item>
                <RulesModal />
            </Item>
        </Grid>
        {
            //if player plays move remove select weapon panel and display game result
        }
        {!play ? 
        <>
            <Grid container justifyContent={'center'} direction='row' spacing={2}>
                <SelectWeapon />
            </Grid>

            <Grid item xs={12} md={12} lg={12} xl={12} textAlign={'center'}>
                <Item>
                    <Typography variant="h1" marginTop={10}>
                        Pick One!
                    </Typography>
                </Item>
            </Grid>
        </>
        : <>
            <Grid item xs={12} md={12} lg={12} xl={12} textAlign={'center'}>
                <Item>
                    <Typography variant="h1">
                        {winner}
                    </Typography>
                    <Typography component={'p'}>
                        {message}
                    </Typography>
                </Item>
            </Grid>

            <Grid container justifyContent={'center'} direction='row'>
                   <GameResult /> 
            </Grid>

            
        </>
        } 
        
    </Grid>
    )
}

export default Game