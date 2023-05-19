import LotteryCardContent from './lottery-card-content/lottery-card-content.component';
import './lottery-card-inside.styles.scss'

const LotteryCardInside = () => {
    return (
        <div className='lottery-card-inside'>
            <LotteryCardContent />
        </div>
    );
}

export default LotteryCardInside;
