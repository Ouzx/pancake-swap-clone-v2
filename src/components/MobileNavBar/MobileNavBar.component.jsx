import { useEffect, useState } from 'react';
import btns from './mobileNavButtons';
import './MobileNavBar.styles.scss';

const MobileNavBar = () => {
    const [visibilityById, setVisibilityById] = useState(null);
    const [mobileBg, setMobileBg] = useState(false);

    // Disable touch move event
    const disableTouchMove = (e) => {
        e.preventDefault();
    };

    // Enable touch move event
    const enableTouchMove = () => {
        document.removeEventListener('touchmove', disableTouchMove);
    };

    // Handle visibility of mobile navigation bar
    const handleVisibility = (id) => {
        if (visibilityById === id) {
            setVisibilityById(null);
            setMobileBg(false);
            document.body.style.overflow = 'auto';
        } else {
            setVisibilityById(id);
            if (id !== 1) {
                setMobileBg(true);
                document.body.style.overflow = 'hidden';
            } else {
                document.addEventListener('touchmove', disableTouchMove, { passive: false });
            }
        }
    };

    // Handle click outside of mobile navigation bar
    const handleClickOutside = (e) => {
        const mobileNavBar = document.querySelector('.mobile-nav-bar-container');
        const mobileNavBarBg = document.querySelector('.mobile-nav-bg');
        if ((!mobileNavBar.contains(e.target) || e.target === mobileNavBarBg) && visibilityById !== 1) {
            setVisibilityById(null);
            setMobileBg(false);
            document.body.style.overflow = 'auto';
            enableTouchMove();
        }
    };

    // Add and remove click event listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Render mobile navigation buttons
    const renderBtns = () =>
        btns.map((btn) => (
            <div key={btn.id} className="mobile-nav-bar-content__btns" onClick={() => handleVisibility(btn.id)}>
                <span className="mobile-nav-bar-span">
                    <button className="mobile-nav-bar-span__btn">
                        <div className="mobile-nav-bar-span__containerDiv">
                            <div className="mobile-nav-bar-span__innerDiv">
                                <div className="mobile-nav-bar-span__svg">{btn.span.SVG}</div>
                                <div className="mobile-nav-bar-span__svg">{btn.span.SVG}</div>
                            </div>
                            <div className="mobile-nav-bar-span__text">{btn.span.TEXT}</div>
                        </div>
                    </button>
                    <span className={`mobile-nav-bar-span__notifyDot ${btn.span.DOT === undefined ? '' : btn.span.DOT}`}></span>
                </span>
                <div
                    className={`mobile-nav-bar-div ${btn.id === 4 || btn.id === 5 ? 'fourth-and-fifth-child' : 'first-to-third-child'}`}
                    style={{ visibility: visibilityById === btn.id && btn.id !== 1 ? 'visible' : 'hidden' }}
                >
                    {btn.id === 1 ? null : btn.links}
                </div>
            </div>
        ));

    return (
        <div className="mobile-nav-bar-container">
            {mobileBg && <div className={`mobile-nav-bg`}></div>}
            <div className="mobile-nav-bar-content">{renderBtns()}</div>
        </div>
    );
};

export default MobileNavBar;
