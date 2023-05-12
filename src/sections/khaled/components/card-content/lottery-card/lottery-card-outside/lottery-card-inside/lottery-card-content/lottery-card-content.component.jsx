import './lottery-card-content.styles.scss'
import LotteryLogo from './lottery-logo/lottery-logo.component';
import LotteryText from './lottery-text/lottery-text.component';

const LotteryCardContent = () => {
    return (
        <div className="lottery-card-content">
            <LotteryLogo />
            <LotteryText />
        </div>
    );
}

export default LotteryCardContent;
