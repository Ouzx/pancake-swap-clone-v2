import LotteryCardInside from './lottery-card-inside/lottery-card-inside.component';
import './lottery-card-outside.styles.scss'

const LotteryCardOutside = () => {
    return (
        <div className='lottery-card-outside'>
            <LotteryCardInside />
        </div>
    );
}

export default LotteryCardOutside;
