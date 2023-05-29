import './lottery-text.styles.scss'
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react'

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const LotteryText = () => {

    const numberRef = useRef(null)

    useEffect(() => {
        const number = { value: 0 };

        gsap.fromTo(
            number,
            { value: 0 },
            {
                value: 47258,
                duration: 2,
                roundProps: "value",
                ease: "power1.inOut",
                onUpdate: function () {
                    numberRef.current.innerHTML = formatNumber(this.targets()[0].value);
                },
            }
        );
    }, []);

    return (
        <div className='lottery-text-container'>
            <div className='lottery-text'>Lottery</div>
            <div className='lottery-text-bill-number'>
                <span>$</span>
                <span ref={numberRef} className='lottery__number'>0</span>
            </div>
            <div className='lottery-text-cake'>in CAKE prizes this round</div>
            <div className='lottery-text-ticket'>Buy tickets with CAKE, win CAKE if your numbers match</div>
        </div>
    );
}

export default LotteryText;
