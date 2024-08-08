import { Route, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';
import styles from './app.module.scss';

export const App = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </div>
        </div>
    );
};
