import { Card } from "@mui/material"
import { CardMedia } from "@mui/material"
import { useSelector } from "react-redux"
import { getWeapon } from "../features/gameSlice"
import ScissorsImage from '../assets/images/scissorsPlayer.png'
import PaperImage from '../assets/images/paperPlayer.png'
import RockImage from '../assets/images/rockPlayer.png'
const PlayerMove = () => {

    const weapon = useSelector(getWeapon)
    //set all Images on left side as player is displayed on left panel
    //images are to be loaded conditionaly depending on weapon stored in redux store
    return(
    <>
        <Card style={{width:"350px"}}>
            <CardMedia 
                component='img'
                image={
                    weapon.player === 'rock' ? RockImage
                    : weapon.player === 'paper' ? PaperImage
                    : weapon.player === 'scissors' ? ScissorsImage
                    : null
                }
                height={350}
                >
            </CardMedia> 
        </Card>
        <h2>YOU</h2>
    </>
    )
}

export default PlayerMove;