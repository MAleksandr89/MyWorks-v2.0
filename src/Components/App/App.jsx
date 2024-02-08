import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Footer } from '../Footer/Footer';
import styles from './app.module.scss';

export const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className={styles.content}>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
};
