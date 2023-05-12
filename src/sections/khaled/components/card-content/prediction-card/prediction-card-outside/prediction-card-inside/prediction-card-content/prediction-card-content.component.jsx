import './prediction-card-content.styles.scss'
import PredictionLogo from './prediction-logo/prediction-logo.component';
import PredictionText from './prediction-text/prediction-text.component';

const PredictionCardContent = () => {
    return (
        <div className='prediction-card-content'>
            <PredictionLogo />
            <PredictionText />
        </div>
    );
}

export default PredictionCardContent;
