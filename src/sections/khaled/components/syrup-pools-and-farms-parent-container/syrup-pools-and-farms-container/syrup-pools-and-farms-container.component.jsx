import './syrup-pools-and-farms-container.styles.scss'
import { TbArrowsDownUp } from "react-icons/tb";

const SyrupPoolsAndFarmsContainer = () => {
    return (
        <div className='syrup-pools-and-farms-container'>
            {/* -------------------------------TOP PART---------------------------------- */}
            <div className='top-syrup-pools-and-farms'>
                <h2 className='top-syrup-pools-and-farms-h2'>
                    Top <span className='top-syrup-pools-and-farms-span'>{/*TODO Turn span value into a JSX value*/}Farms</span>
                </h2>
                <button className='top-syrup-pools-and-farms-btn'>
                    <TbArrowsDownUp className='top-syrup-pools-and-farms-btn-icon' />
                </button>

            </div>

            {/* -----------------------------BOTTOM PART-------------------------------- */}
            <div>

            </div>
        </div>
    );
}

export default SyrupPoolsAndFarmsContainer;
