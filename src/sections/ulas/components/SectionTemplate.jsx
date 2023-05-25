import Button from "../../../components/Button/Button";
import Link from "../../../components/link/Link";

function SectionTemplate({ children, title, titleDesc, textContent, buttonText, direction }) {

    return (
        <section className={'section ' + title}>
            <div className={'section_container '+ direction}>
                <div className='_text_container'>
                    <h2 className='_title'>
                        <span className='_emphasis'>{titleDesc.split(' ')[0]}</span> {titleDesc.split(' ').slice(1).join(' ')}
                    </h2>
                    <p className='_description'>
                        {textContent}
                    </p>
                    <div className='_bottom'>
                        <Button text={title === 'earn' ? 'Explore' : 'Trade Now'}/>
                        <Link title='Learn'/>
                    </div>
                </div>
                <div className="_image_container">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default SectionTemplate;