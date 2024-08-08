import React from 'react';
import { Buttons } from './Buttons/Buttons';
import styles from './InputBlock.module.scss';

export const InputBlock = ({ handleSelectNumber, handleAction, handleActionsRight, checked }) => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'];
    const resetActions = ['AC', '+/-', '%'];
    const calculationActions = ['÷', '×', '-', '+', '='];

    const containerStyles = 
        checked
            ? { backgroundImage: 'linear-gradient(-207deg, #002235, #FFFFFF, #002235)' }
            : { backgroundImage: 'linear-gradient(-207deg, #629dd4, #FFFFFF, #629dd4)' };

    return (
        <div style={ containerStyles } className={styles['container-input']}>
            <div className={styles['input-left-block']}>
                <div className={styles['left-actions']}>
                    { resetActions.map(reset => (
                        <div key={ reset } onClick={() => handleAction(reset)} className={styles['reset-actions']}>
                        { reset }
                        </div>
                    ) )}
                </div>
                <div className={styles['left-numbers']}>
                    {numbers.map(number => <Buttons key={ number } handleSelectNumber={handleSelectNumber} numbers={number} />)}
                </div>
            </div>
            <div className={styles['input-right-block']}>
                { calculationActions.map(actions => {
                    return (
                        <div key={ actions } onClick={() => handleActionsRight(actions)} className={styles['right-actions']}>
                            { actions }
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
