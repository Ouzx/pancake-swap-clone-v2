import FloatingIcons from "./components/FloatingIcons";
import SectionTemplate from "./components/SectionTemplate";
import TradeSeperator from "./components/TradeSeperator";
import './Earn.scss'

const tradeProps = {
    title: 'trade',
    direction: 'default',
    titleDesc: 'Trade anything. No registration, no hassle.',
    textContent: 'Trade any token on BNB Smart Chain in seconds, just by connecting your wallet.',
    buttonText: 'Trade Now'
}

const tradeSrc = {
    first: '/BNB.webp',
    second: '/BTC.webp',
    third: '/CAKE.webp'
}


function Trade() {
    return (
        <div className="xTradex">
            <SectionTemplate
                title={tradeProps.title}
                direction={tradeProps.direction}
                titleDesc={tradeProps.titleDesc}
                textContent={tradeProps.textContent}>
                <FloatingIcons firstImg={tradeSrc.first} secondImg={tradeSrc.second} thirdImg={tradeSrc.third} />
            </SectionTemplate>
            <div className="anything__seperator">
                <TradeSeperator />
            </div>

        </div>);
}

export default Trade;