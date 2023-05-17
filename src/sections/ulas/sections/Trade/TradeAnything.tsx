import Link from '../../../../components/link/Link'
import TradeAnythingSeperator from '../../../../assets/icons/TradeAnythingSeperator'
import "./TradeAnything.scss"
import FloatingIcons from './components/FloatingIcons'
import Button from '../../../../components/Button/Button'

const TradeAnything = () => {
    interface Props {
        title: string,
        description: string,
    }
    return (
        <section className='trade_any'>
            <div className="mega_container">
                <div className='section_container'>
                    <div className='title_desc'>
                        <h2 className='title__'>
                            <span className='purple__'>Trade</span> anything. No registration, no hassle.
                        </h2>
                        <p className='description__'>
                            Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.
                        </p>
                        <div className='bottom__'>
                            <Button text='Trade Now'/>
                            <Link
                                title='Learn' />
                        </div>
                    </div>
                    <FloatingIcons />
                </div>
            </div>
            <div className="anything__seperator">
                <TradeAnythingSeperator />
            </div>
        </section>
    )
}
export default TradeAnything