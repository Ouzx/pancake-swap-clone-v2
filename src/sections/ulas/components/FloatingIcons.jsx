import './FloatingIcons.scss'
function FloatingIcons({ firstImg, secondImg, thirdImg }) {

    return (
        <>
            <div className='floating-icons'>
                <img className='first' src={firstImg}
                    alt="first"
                    loading="lazy"
                    decoding="async" />
                <img className='second' src={secondImg}
                    alt="second"
                    loading="lazy"
                    decoding="async" />
                <img className='third' src={thirdImg}
                    alt="third"
                    loading="lazy"
                    decoding="async" />
                <img className="placeholder" src="/CAKE.webp"
                    alt="cake" />

            </div>
        </>
    );
}

export default FloatingIcons;