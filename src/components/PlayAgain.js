import { makeStyles } from "@mui/styles"
import { useDispatch } from "react-redux"
import { play } from "../features/gameSlice"

const useStyles = makeStyles({
    rules:{
        minWidth:'150px', 
        minHeight:'50px', 
        margin:'10px',
        backgroundColor:'white',
        color:'black',
        borderRadius:'50px',

    }
})

const PlayAgainButton = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const playAgain = () => {
        dispatch(play(false))
    }
    return (
        //set playAgain to false to render SelectWeapon on Game component
        <button className={classes.rules} onClick={playAgain}>
            Play Again
        </button>
    )
}

export default PlayAgainButton