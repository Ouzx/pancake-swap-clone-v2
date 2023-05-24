import SectionTemplate from "./components/SectionTemplate";
import FloatingIcons from "./components/FloatingIcons";
import './SectionTemplate.scss';

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
        <div>
            <SectionTemplate
                title={earnProps.title}
                direction={earnProps.direction}
                titleDesc={earnProps.titleDesc}
                textContent={earnProps.textContent}>
                <FloatingIcons firstImg={earnSrc.first} secondImg={earnSrc.second} thirdImg={earnSrc.third} />
            </SectionTemplate>
        </div>);
}

export default Earn;