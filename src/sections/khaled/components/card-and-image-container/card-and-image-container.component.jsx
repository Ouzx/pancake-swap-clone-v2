import CardContainer from "../card-container/card-container.component"
import ImageContainer from "../image-container/image-container.component"
import './card-and-image-container.styles.scss'
const CardAndImageContainer = () => {
    return (
        <div className='khaled-card-and-image-container'>
            <ImageContainer />
            <CardContainer />
        </div>
    )
}

export default CardAndImageContainer
