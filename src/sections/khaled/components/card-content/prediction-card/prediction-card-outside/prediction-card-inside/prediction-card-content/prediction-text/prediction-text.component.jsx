import './prediction-text.styles.scss';

const PredictionText = () => {
    return (
        <div className='prediction-text-container'>
            <div className='prediction-text-div'>Prediction</div>
            <h2 scale='xl' className='prediction-billion-h2'>$1.2 billion</h2>
            <div className='prediction-cake-div'>in BNB + CAKE won so far</div>
            <div className='prediction-price-div'>Predict the price trend of BNB or CAKE to win</div>
        </div>
    );
}

export default PredictionText;
