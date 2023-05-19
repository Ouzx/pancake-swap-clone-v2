import './lottery-text.styles.scss'

const LotteryText = () => {
    return (
        <div className='lottery-text-container'>
            <div className='lottery-text'>Lottery</div>
            <div className='lottery-text-bill-number'><span>$47,256</span></div>
            <div className='lottery-text-cake'>in CAKE prizes this round</div>
            <div className='lottery-text-ticket'>Buy tickets with CAKE, win CAKE if your numbers match</div>
        </div>
    );
}

export default LotteryText;
