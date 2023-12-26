import React, { useState } from 'react';
import '../css/dropdown.css';

const Dropdown = () => {
    const [showList, setShowList] = useState({
        men: false,
        lady: false,
        neutral: false,
        couple: false,
    });

    //點擊後切換縮合
    const handleItemClick = (category) => {
        setShowList((prevShowList) => ({
            ...prevShowList,
            [category]: !prevShowList[category],
        }));
    // 關閉其他類別的清單
        for (const key in showList) {
            if (key !== category) {
                setShowList((prevShowList) => ({
                    ...prevShowList,
                    [key]: false,
                }));
            }
        }
    };

    return (
        <div className='aside_dropdown'>
            <div className={`list_series d-flex ${showList['men']? 'active' : '' }`} onClick={() => handleItemClick('men')}>
                MEN
                <i className={`bi bi-plus ms-auto ${showList['men']? 'fade': '' }`}></i>
            </div>
            {showList['men'] && (
                <ul className='list-unstyled'>
                    <li>Automatic</li>
                    <li>Manual</li>
                    <li>Diving</li>
                    <li>Smart</li>
                    <li>Luxury</li>
                </ul>
            )}
            <div className={`list_series d-flex ${showList['lady']? 'active' : '' }`} onClick={() => handleItemClick('lady')}>
                LADY
                <i className={`bi bi-plus ms-auto ${showList['lady']? 'fade': '' }`}></i>
                </div>
            {showList['lady'] && (
                <ul className='list-unstyled'>
                    <li>Automatic</li>
                    <li>Manual</li>
                    <li>Diving</li>
                    <li>Smart</li>
                    <li>Luxury</li>
                </ul>
            )}
            <div className={`list_series d-flex ${showList['neutral']? 'active' : '' }`} onClick={() => handleItemClick('neutral')}>
                NEUTRAL
                <i className={`bi bi-plus ms-auto ${showList['neutral']? 'fade': '' }`}></i>
                </div>
            {showList['neutral'] && (
                <ul className='list-unstyled'>
                    <li>Automatic</li>
                    <li>Manual</li>
                    <li>Diving</li>
                    <li>Smart</li>
                    <li>Luxury</li>
                </ul>
            )}
            <div className={`list_series d-flex ${showList['couple']? 'active' : '' }`} onClick={() => handleItemClick('couple')}>
                COUPLE
                <i className={`bi bi-plus ms-auto ${showList['couple']? 'fade': '' }`}></i>
                </div>
            {showList['couple'] && (
                <ul className='list-unstyled'>
                    <li>Automatic</li>
                    <li>Manual</li>
                    <li>Diving</li>
                    <li>Smart</li>
                    <li>Luxury</li>
                </ul>
            )}
        </div>
    );
};


export default Dropdown;