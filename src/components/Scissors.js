import ScissorsImage from '../assets/images/scissors.png'
import { Card } from "@mui/material"
import { CardMedia } from "@mui/material"
const Scissors = () => {
    return(
        <Card style={{width:"270px"}}>
            <CardMedia 
                component='img'
                image={ScissorsImage}
                height={400}
            >
            </CardMedia>
        </Card>
    )
}

export default Scissors;