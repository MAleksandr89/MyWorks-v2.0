import React from 'react';
import styles from './accordion.module.scss';
import classNames from 'classnames';

const Accordion = () => {
    const listGroup = [
        {
            title: 'Блок 1. Заголовок',
            subTitle: 'Блок 1. Контент',
            descriptions:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis natus praesentium nulla illum mollitia unde quo reprehenderit deserunt, impedit eos nemo magnam soluta distinctio adipisci maxime tenetur voluptatem at qui.',
        },
        {
            title: 'Блок 2. Заголовок',
            subTitle: 'Блок 2. Контент',
            descriptions:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis natus praesentium nulla illum mollitia unde quo reprehenderit deserunt, impedit eos nemo magnam soluta distinctio adipisci maxime tenetur voluptatem at qui.',
        },
        {
            title: 'Блок 3. Заголовок',
            subTitle: 'Блок 3. Контент',
            descriptions:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis natus praesentium nulla illum mollitia unde quo reprehenderit deserunt, impedit eos nemo magnam soluta distinctio adipisci maxime tenetur voluptatem at qui.',
        },
        {
            title: 'Блок 4. Заголовок',
            subTitle: 'Блок 4. Контент',
            descriptions:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit Veritatis natus praesentium nulla illum mollitia unde quo reprehenderit deserunt, impedit eos nemo magnam soluta distinctio adipisci maxime tenetur voluptatem at qui.',
        },
    ];

    const showContent = (e) => {
        e.target.nextElementSibling.classList.toggle(styles['hidden'])
    };

    return (
        <div className={styles.wrapper}>
            {listGroup.map((items) => (
                <div className={styles['list-group']}>
                    <div
                        className={classNames(
                            styles['list-group-item'],
                            styles['list-header']
                        )}
                        onClick={(e) => showContent(e)}
                    >
                        {items.title}
                    </div>
                    <div
                        className={classNames(
                            styles['list-group-item'],
                            styles['list-content'],
                            styles['hidden']
                        )}
                    >
                        <h5>{items.subTitle}</h5>
                        {items.descriptions}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
