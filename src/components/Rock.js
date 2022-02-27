import RockImage from '../assets/images/rock.png'
import { Card } from "@mui/material"
import { CardMedia } from "@mui/material"
const Rock = () => {
    return(
        <Card style={{width:"270px"}}>
            <CardMedia 
                component='img'
                image={RockImage}
                height={400}
                >
            </CardMedia> 
        </Card>
    )
}

export default Rock;