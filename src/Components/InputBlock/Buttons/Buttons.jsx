import React from 'react';
import styles from './Buttons.module.scss';

export const Buttons = ({ numbers, handleSelectNumber }) => {
    return (
        <div className={styles['container-buttons']}>
            <span onClick={() => handleSelectNumber(numbers)} className={styles['button']}>
                { numbers }
            </span>
            </div>
    );
};
