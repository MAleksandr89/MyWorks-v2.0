import styles from './header.module.scss';

export const Header = () => {


    const isInteger = (num) => {
        return num % 1 === 0;
      }

      const currentUrl = window.location.href;
      console.log(currentUrl); // выведет текущий URL в консоль
      const sortSpeed = isValidResult
      .map((item) => item.speed.value)
      .sort((a, b) => b - a);








    return (
        <div className={styles.header}>
            <div className={styles['header-container']}>
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
