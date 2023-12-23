import { animateScroll as scroll } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import '../css/btn.css';

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500, 
            smooth: 'easeInOutQuart'
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) { // 設置卷軸位置的閾值
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`btn_ScrollToTop position-fixed fade ${showButton ? 'show' : 'hide'}`}
            style={{ bottom: '2rem', right: '1rem', cursor: 'pointer', zIndex:5 }}
            onClick={scrollToTop}
            >
            <i className="bi bi-arrow-up-square-fill fs-1"></i>
        </div>
    );
};
    
    export default ScrollToTop;