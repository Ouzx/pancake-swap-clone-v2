import React from 'react'

import "./SlideOzk.scss";
import Button from '../../../Button/Button';
import { BiLinkExternal } from 'react-icons/bi';


const SlideOzk = () => {
  return (
        <div className='slideOzk'>
            <div className='slideOzk-content'>
                <img src="/ConnectWalletAlt/ethXpancakeswap.png" alt="PancakeSwap" 
                    height={18} width={119}/>
                <h3 className='slideOzk-header'>gm eth teams</h3>
                <Button text='👋  Get in Touch' className='slideOzk-button'>
                <BiLinkExternal size={20} style={{marginLeft: "4px"}}/>
                </Button>
            </div>
            <div className='slideOzk-img'>
                <img src="/ConnectWalletAlt/ETHBunny.png" alt="" />

            </div>
        </div>
    )
}

export default SlideOzk;