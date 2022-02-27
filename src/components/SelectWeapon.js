import Item from '@mui/material/Grid';
import { Grid } from "@mui/material"
import Rock from './Rock'
import Paper from './Paper';
import Scissors from './Scissors';
import { useDispatch } from 'react-redux';
import {selectWeapon, 
        play
} from '../features/gameSlice';

const SelectWeapon = () => {

    const dispatch = useDispatch()
    //save all weapons in array
    const weapons = ['rock','scissors','paper']
   
    const selectRock = () => {
        //if user click on image rock then for player weapon save cooresponding value
        //for Computer use index Math.floor(Math.random()*3) to get value from weapons array with index between 0-2
        //same logic is used for all available weapons
        dispatch(selectWeapon({player:'rock', computer:weapons[Math.floor(Math.random()*3)]}))
        dispatch(play(true))
    }
    const selectPaper = () => {
        dispatch(selectWeapon({player:'paper', computer:weapons[Math.floor(Math.random()*3)]}))
        dispatch(play(true))
    }

    const selectScissors = () => {
        dispatch(selectWeapon({player:'scissors', computer:weapons[Math.floor(Math.random()*3)]}))
        dispatch(play(true)) 
    }

    return (
    <>
        <Grid item>
            <Item onClick={selectRock}>
                <Rock />
            </Item>
        </Grid>

        <Grid item>
            <Item onClick={selectPaper}>
               <Paper /> 
            </Item>
        </Grid>

        <Grid item>
            <Item onClick={selectScissors}>
                <Scissors />
            </Item>
        </Grid>  
    </>
    )
}

export default SelectWeapon