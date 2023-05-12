import CardContainer from "../card-container/card-container.component"
import ImageContainer from "../image-container/image-container.component"

const CardAndImageContainer = () => {
    return (
        <div className='khaled-card-and-image-container' style={{ margin: '0px', width: '100%', maxWidth: '968px' }}>
            CardAndImageContainer
            <ImageContainer />
            <CardContainer />
        </div>
    )
}

export default CardAndImageContainer
