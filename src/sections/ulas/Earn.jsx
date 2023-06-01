import SectionTemplate from "./components/SectionTemplate";
import FloatingIcons from "./components/FloatingIcons";
import './SectionTemplate.scss';
import SyrupPoolsAndFarmsContainer from "../khaled/components/syrup-pools-and-farms-parent-container/syrup-pools-and-farms-container/syrup-pools-and-farms-container.component";
import TradeSeperator from "./components/TradeSeperator";

const earnProps = {
    title: 'earn',
    direction: 'reverse',
    titleDesc: 'Earn passive income with crypto.',
    textContent: 'PancakeSwap makes it easy to make your crypto work for you.',
    buttonText: 'Explore'
}

const earnSrc = {
    first: '/folder.webp',
    second: '/pie.webp',
    third: '/stonks.webp'
}

function Earn() {
    return (
        <div className="earn__ultra__mega__container">
            <div className="anything__seperator">
                <TradeSeperator />
            </div>
            <SectionTemplate
                title={earnProps.title}
                direction={earnProps.direction}
                titleDesc={earnProps.titleDesc}
                textContent={earnProps.textContent}>
                <FloatingIcons firstImg={earnSrc.first} secondImg={earnSrc.second} thirdImg={earnSrc.third} />
            </SectionTemplate>
            <div className="syrup__farms__mega__container">
                <SyrupPoolsAndFarmsContainer />
            </div>
        </div>);
}

export default Earn;
