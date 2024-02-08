import styles from './header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>Логотип</div>
                <div className={styles.tabs}>
                    <span>Вкладка 1</span>
                    <span>Вкладка 2</span>
                    <span>Вкладка 3</span>
                    <span>Вкладка 4</span>
                    <span>Вкладка 5</span>
                </div>
                <div className={styles['login-buttons']}>
                    <button>Вход</button>
                    <button>Регистрация</button>
                </div>
            </div>
        </div>
    );
};
