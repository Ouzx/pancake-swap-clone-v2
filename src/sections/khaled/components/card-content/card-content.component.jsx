import PredictionCard from './prediction-card/prediction-card.component';
import LotteryCard from './lottery-card/lottery-card.component';
import './card-content.styles.scss'

const CardContent = () => {
    return (
        <div className='khaled-card-content'>
            <PredictionCard />
            <LotteryCard />
        </div>
    );
}

export default CardContent;
