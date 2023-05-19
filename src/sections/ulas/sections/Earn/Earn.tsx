import Link from '../../../../components/link/Link'
import TradeAnythingSeperator from '../../../../assets/icons/TradeAnythingSeperator'
import "./Earn.scss"
import FloatingIcons2 from './components/FloatingIcons2'
import Button from '../../../../components/Button/Button'
import { ReactNode } from 'react'

interface Props {
    children?: ReactNode,
}

const Earn = ({ children }: Props) => {
    return (
        <section className='earn'>
            <div className="earn_mega_container">
                <div className="anything__seperator">
                    <TradeAnythingSeperator />
                </div>
                <div className='earn_section_container'>
                    <div className='earn_image_container'>
                        <FloatingIcons2 />
                    </div>
                    <div className='earn_title_desc'>
                        <h2 className='earn_title__'>
                            <span className='earn_purple__'>Earn</span> passive income with crypto.
                        </h2>
                        <p className='earn_description__'>
                            PancakeSwap makes it easy to make your crypto work for you.
                        </p>
                        <div className='earn_bottom__'>
                            <Button text='Explore' />
                            <Link
                                title='Learn' />
                        </div>
                    </div>

                </div>
                {children}
            </div>

        </section>
    )
}
export default Earn