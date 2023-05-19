import Button from '../../../../../../../../components/Button/Button';
import './prediction-card-content.styles.scss'
import PredictionLogo from './prediction-logo/prediction-logo.component';
import PredictionText from './prediction-text/prediction-text.component';
import { AiOutlineArrowRight } from 'react-icons/ai'

const PredictionCardContent = () => {
    return (
        <div className='prediction-card-content'>
            <PredictionLogo />
            <PredictionText />
            <div className='prediction-btn-container'>
                <Button text='Play' className='prediction-btn'>
                    <AiOutlineArrowRight className='prediction-btn-right-arrow' />
                </Button>
            </div>
        </div>
    );
}

export default PredictionCardContent;
