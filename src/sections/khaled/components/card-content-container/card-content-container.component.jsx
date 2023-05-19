import CardContent from '../card-content/card-content.component';
import './card-content-container.styles.scss'

const CardContentContainer = () => {
    return (
        <div className='khaled-card-content-container'>
            <h2 className='khaled-win-prize'><span style={{ color: 'var(--color-purple)' }}>Win</span> millions in prizes</h2>
            <div className='khaled-provably'>Provably fair, on-chain games.</div>
            <div className='khaled-win-big'>Win big with PancakeSwap.</div>
            <CardContent />
        </div>
    );
}

export default CardContentContainer;
