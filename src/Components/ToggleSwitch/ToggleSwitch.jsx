import React from 'react';
import classNames from 'classnames';
import { SunImage } from '../Assets/SunImage/SunImage';
import { MoonImage } from '../Assets/MoonImage/MoonImage';
import styles from './ToggleSwitch.module.scss';

export const ToggleSwitch = ({type, setChecked, checked}) => {
    const themeSwitch = () => {
        setChecked(prev => !prev)
    }
    
    return (
        <>
            {type !== 'round' 
            ? <label className={styles.switch}>
                <input onClick={ themeSwitch } type="checkbox"/>
                <span className={styles.slider}></span>
                <div><SunImage /></div>
            </label>
            : <label className={styles.switch}>
                <input onClick={ themeSwitch } type="checkbox"/>
                <span className={classNames(styles.slider, styles.round)}></span>
                <div className={styles.sun}><SunImage checked={ checked } /></div>
                <div className={styles.moon}><MoonImage checked={ checked }/></div>
          </label>}
        </>
    );
};
