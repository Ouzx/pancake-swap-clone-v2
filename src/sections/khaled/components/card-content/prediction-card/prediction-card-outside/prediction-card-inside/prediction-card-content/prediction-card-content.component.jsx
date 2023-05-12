import Button from '../../../../../../../oguzhan/sections/Footer/Components/Button/Button';
import './prediction-card-content.styles.scss'
import PredictionLogo from './prediction-logo/prediction-logo.component';
import PredictionText from './prediction-text/prediction-text.component';

const PredictionCardContent = () => {
    return (
        <div className='prediction-card-content'>
            <PredictionLogo />
            <PredictionText />
            <Button text='Play' />
        </div>
    );
}

export default PredictionCardContent;
