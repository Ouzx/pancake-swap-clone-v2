import "./FloatingIcons2.scss"

function FloatingIcons2() {
    interface Props {
        title: string,
        description: string,

    }
    return (
        <div className='earn_imgs__'>
            <img className='bnb' src="/folder.webp"
                loading="lazy"
                decoding="async" />
            <img className='btc' src="/pie.webp"
                loading="lazy"
                decoding="async" />
            <img className='cake' src="/stonks.webp"
                loading="lazy"
                decoding="async" />
            <img className="earn_placeholder" src="/CAKE.webp" />
        </div>
    );
}
{/* <div className='imgs__'>
<img className='bnb' src="/BNB.webp"
    loading="lazy"
    decoding="async" />
<img className='btc' src="/BTC.webp"
    loading="lazy"
    decoding="async" />
<img className='cake' src="/CAKE.webp"
    loading="lazy"
    decoding="async" />
<img className="placeholder" src="/CAKE.webp" />
</div> */}
// "pancake-swap-clone-v2/src/sections/ulas/sections/Trade/images/BNB.webp 512w"  "/images/home/trade/BNB.webp 512w,
//   /images/home/trade/BNB@1.5x.webp 768w,
//   /images/home/trade/BNB@2x.webp 1024w,"

export default FloatingIcons2;