import PredictionCardInside from './prediction-card-inside/prediction-card-inside.component';
import './prediction-card-outside.styles.scss'

const PredictionCardOutside = () => {
    return (
        <div className='prediction-card-outside'>
            <PredictionCardInside />
        </div>
    );
}

export default PredictionCardOutside;
