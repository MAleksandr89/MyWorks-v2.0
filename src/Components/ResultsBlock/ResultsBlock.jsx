import React from 'react';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';
import styles from './ResultsBlock.module.scss';

export const ResultsBlock = ({ viewNumbers, result, setChecked, checked }) => {

    return (
        <div className={styles['container-result']}>
                <div className={styles['container-result-mode']}>
                    <ToggleSwitch checked={ checked } setChecked={ setChecked } type="round" /> 
                </div>
                <div style={{ color: checked ? 'white' : 'black'}} className={styles['container-result-value']}>
                    <div className={styles['value']}>
                        <div style={{ color: checked ? 'white' : 'black'}} className={styles['value-process']}>{ viewNumbers }</div>
                        <div className={styles['value-summ']}>{ result }</div>
                    </div>
                </div>
            </div>
    );
};
