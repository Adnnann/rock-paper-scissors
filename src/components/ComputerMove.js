import { Card } from "@mui/material"
import { CardMedia } from "@mui/material"
import { useSelector } from "react-redux"
import { getWeapon } from "../features/gameSlice"
import PaperImage from '../assets/images/paperComputer.png'
import RockImage from '../assets/images/rockComputer.png'
import ScissorsImage from '../assets/images/scissorsComputer.png'
const ComputerMove = () => {

    const weapon = useSelector(getWeapon)

    return(
    <>
        <Card style={{width:"350px"}}>
            <CardMedia 
                component='img'
                image={
                    weapon.computer === 'rock' ? RockImage
                    : weapon.computer === 'paper' ? PaperImage
                    : weapon.computer === 'scissors' ? ScissorsImage
                    : null
                }
                height={350}
                >
            </CardMedia> 
        </Card>
        <h2 style={{textAlign:'right'}}>COMPUTER</h2>
    </>
    )
}

export default ComputerMove;