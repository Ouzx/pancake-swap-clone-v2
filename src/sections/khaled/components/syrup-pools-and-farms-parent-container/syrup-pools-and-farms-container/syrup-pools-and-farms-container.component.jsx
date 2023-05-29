import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { TbArrowsDownUp } from "react-icons/tb";
import commaNumber from 'comma-number';

import './syrup-pools-and-farms-container.styles.scss'

const SyrupPoolsAndFarmsContainer = () => {
    const [state, setState] = useState({
        farm: 'active',
        syrup: 'notActive',
        farmOrSyrup: 'Farms'
    })

    const [intervalId, setIntervalId] = useState(null);

    // Handles switching between Farm and Syrup Pools
    const handleClick = () => {
        clearInterval(intervalId);
        if (state.farmOrSyrup === 'Farms') {
            setState({ farm: 'notActive', syrup: 'active', farmOrSyrup: 'Syrup Pools' })
        } else {
            setState({ farm: 'active', syrup: 'notActive', farmOrSyrup: 'Farms' })
        }
    }

    // Switches between Farm and Syrup Pools every 5 seconds
    useEffect(() => {
        const newIntervalId = setInterval(() => {
            if (state.farm === 'active') {
                setState({ farm: 'notActive', syrup: 'active', farmOrSyrup: 'Syrup Pools' })
            } else {
                setState({ farm: 'active', syrup: 'notActive', farmOrSyrup: 'Farms' })
            }
        }, 5000);

        setIntervalId(newIntervalId);
        return () => clearInterval(newIntervalId);
    }, [state.farm]);

    // Generates card elements for the given listType
    const renderCards = (listType) => {
        const cardData = listType === 'farm' ?
            [
                { cardId: 'One', title: 'UNW-BNB LP v3', percentage: useSpring({ val: '199073', from: { val: '0' } }) },
                { cardId: 'Two', title: 'unshETH-USH LP v3', percentage: useSpring({ val: '228730', from: { val: '0' } }) },
                { cardId: 'Three', title: 'AXL-USDT LP v3', percentage: useSpring({ val: '235810', from: { val: '0' } }) },
                { cardId: 'Four', title: 'SQUAD-CAKE LP', percentage: useSpring({ val: '148078', from: { val: '0' } }) },
                { cardId: 'Five', title: 'REVV-EDU LP v3', percentage: useSpring({ val: '136929', from: { val: '0' } }) }

            ] :
            [
                { cardId: 'One', title: 'Stake CAKE', percentage: useSpring({ val: '21622', from: { val: '0' } }) },
                { cardId: 'Two', title: 'Stake HAY - Earn CAKE', percentage: useSpring({ val: '25193', from: { val: '0' } }) },
                { cardId: 'Three', title: 'Stake CAKE - Earn SD', percentage: useSpring({ val: '13686', from: { val: '0' } }) },
                { cardId: 'Four', title: 'Stake CAKE - Earn USH', percentage: useSpring({ val: '10972', from: { val: '0' } }) },
                { cardId: 'Five', title: 'Stake CAKE - Earn PSTAKE', percentage: useSpring({ val: '10485', from: { val: '0' } }) }
            ];


        return cardData.map((card, index) => (
            <div className='syrup-farm-cards__container syrup-farm-flex' key={index + card.title}>
                <div className={`syrup-farm-cards__card${card.cardId} syrup-farm-slide-animation-${state[listType]} syrup-farm-flex`}>
                    <div className='syrup-farm-cards-topText'>{card.title}</div>
                    <div className='syrup-farm-flex syrup-farm-cards-middleText'>
                        <div className='syrup-farm-cards-middleText__text'>
                            <animated.span style={{ display: 'inline-flex' }}>{card.percentage.val.to(val => Math.floor(val) / 1000)}</animated.span>%
                        </div>
                    </div>
                    <div className='syrup-farm-cards-bottomText'>APR</div>
                </div>
            </div >
        ))
    }


    return (
        <div className='syrup-pools-and-farms-container'>
            {/* -----------TOP PART------------ */}

            <div className='top-syrup-pools-and-farms'>
                <h2 className='top-syrup-pools-and-farms-h2'>
                    Top <span className='top-syrup-pools-and-farms-span'>{state.farmOrSyrup}</span>
                </h2>
                <button onClick={handleClick} className='top-syrup-pools-and-farms-btn'>
                    <TbArrowsDownUp className='top-syrup-pools-and-farms-btn-icon' />
                </button>

            </div>

            {/* ----------BOTTOM PART---------- */}

            <div className="bottom-syrup-and-farms-list">

                {/* -------------Farms------------ */}
                <div className='syrup-farm-cards'>
                    {renderCards('farm')}
                </div>

                {/* ----------Syrup Pools--------- */}
                <div className='syrup-farm-cards'>
                    {renderCards('syrup')}
                </div>
            </div>
        </div>
    );
}

export default SyrupPoolsAndFarmsContainer;

