import Link from '../../../../components/link/Link'
import TradeAnythingSeperator from '../../../../assets/icons/TradeAnythingSeperator'
import "./Earn.scss"
import FloatingIcons2 from './components/FloatingIcons2'


const Earn = () => {
    interface Props {
        title: string,
        description: string,
    }
    return (
        <section className='earn'>
            <div className="earn_mega_container">
                <div className='section_container'>
                    <FloatingIcons2 />


                    <div className='title_desc'>
                        <h2 className='title__'>
                            <span className='purple__'>Earn</span> passive income with crypto.
                        </h2>
                        <p className='description__'>
                            PancakeSwap makes it easy to make your crypto work for you.
                        </p>
                        <div className='bottom__'>
                            <button>

                            </button>
                            <Link
                                title='Learn' />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Earn