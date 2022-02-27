import PaperImage from '../assets/images/paper.png'
import { Card } from "@mui/material"
import { CardMedia } from "@mui/material"
const Paper = () => {
    return(
        <Card style={{width:"270px"}}>
            <CardMedia 
                component='img'
                image={PaperImage}
                height={400}
            >
            </CardMedia>
        </Card>
    )
}

export default Paper;