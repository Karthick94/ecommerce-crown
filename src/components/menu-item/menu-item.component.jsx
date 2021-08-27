import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, img }) => {
    return (
        <div className="menu-item-wrapper">
            <div className="menu-item">
                <div
                    className="menu-item-background"
                    style={{
                        background: `url(${img}) no-repeat center center/cover`
                    }}
                ></div>
                <div className="content-wrapper">
                    <div className="content">
                        <p className="title">{title}</p>
                        <p>Shop Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
