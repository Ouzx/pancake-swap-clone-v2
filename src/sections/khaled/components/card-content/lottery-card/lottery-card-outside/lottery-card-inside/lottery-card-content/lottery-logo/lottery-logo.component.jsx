import { IoTicket } from 'react-icons/io5';
import './lottery-logo.styles.scss'

const LotteryLogo = () => {
    return (
        <div className='lottery-logo-container'>
            <IoTicket className='lottery-ticket' />
        </div>
    );
}

export default LotteryLogo;
