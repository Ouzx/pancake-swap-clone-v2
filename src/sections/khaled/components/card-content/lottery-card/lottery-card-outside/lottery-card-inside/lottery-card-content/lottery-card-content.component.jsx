import './lottery-card-content.styles.scss'
import LotteryLogo from './lottery-logo/lottery-logo.component';
import LotteryText from './lottery-text/lottery-text.component';
import Button from '../../../../../../../../components/Button/Button';
import { AiOutlineArrowRight } from 'react-icons/ai'

const LotteryCardContent = () => {
    return (
        <div className="lottery-card-content">
            <LotteryLogo />
            <LotteryText />
            <div className='lottery-btn-container'>
                <Button text='Buy Tickets' className='lottery-btn'>
                    <AiOutlineArrowRight className='lottery-btn-right-arrow' />
                </Button>
            </div>
        </div>
    );
}

export default LotteryCardContent;
