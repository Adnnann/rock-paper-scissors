import { makeStyles } from "@mui/styles"
import { useDispatch } from "react-redux"
import { openModal } from "../features/gameSlice"

const useStyles = makeStyles({
    rules:{
        marginLeft:'auto', 
        minWidth:'120px', 
        minHeight:'50px', 
        marginRight:'10%', 
        marginTop:"2%",
        backgroundColor:'white',
        color:'black',
        borderRadius:'50px',
        marginBottom:"2%"
    }
})

const RulesButton = () => {

    const dispatch = useDispatch()
    const classes = useStyles()
    const handleOpen = () => dispatch(openModal(true));

    //onClick enables displaying of modal window with game rules
    return (
        <button className={classes.rules} onClick={handleOpen}>
            Rules
        </button>
    )
}

export default RulesButton