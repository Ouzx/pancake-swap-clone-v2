import React from 'react'
import "./WalletImages.scss"

const WalletImages = ({WalletImg, WalletPhrase}) => {
  return (
    <div className='walletImage'>
        <div className='images'>
            {WalletImg === "..." 
            ? <div className='walletImage-more'> ... </div>
            : <img src={WalletImg} alt="" 
            style={{maxWidth:"50px", maxHeight:"50px"}}/>}
            
        </div>
        <div className='wallet-phrase'>
            {WalletPhrase}
        </div>

    </div>
  )
}

export default WalletImages;