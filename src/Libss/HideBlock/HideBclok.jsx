import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './hideblock.module.scss';

const HideBlock = ({ description, btnTextOpen, btnTextClose }) => {
    const [isHidden, setIsHidden] = useState(true);

    const handleClick = () => {
        setIsHidden(!isHidden);
    };

    const buttonClasses = classNames(styles.btn, styles['btn-outline-primary']);
    const cardClasses = classNames(styles.card, {
        [styles['content-hidden']]: isHidden,
    });

    return (
        <div className={styles.wrapper}>
            <button className={buttonClasses} onClick={handleClick}>
                {isHidden ? btnTextOpen : btnTextClose}
            </button>

            <div className={cardClasses} id="content">
                {description}
            </div>
        </div>
    );
};

export default HideBlock;
