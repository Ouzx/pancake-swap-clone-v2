import React from 'react'
import "./WalletSlide1.scss"

const WalletSlide1 = ({header, image, pharase}) => {

  return (
    <div className='walletSlide1'>
        <h1> {header} </h1>
        <img src={image} alt="wallet_intro" />
        <div> {pharase} </div>
    </div>
  )
}

export default WalletSlide1;