import styles from './form.module.scss';
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: '',
    });
    console.log('TCL: Form -> [formErrors', formErrors);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        // Простая валидация: проверка на заполненность полей
        setFormErrors({
            ...formErrors,
            [e.target.name]:
                e.target.value.trim() === '' ? 'Это поле обязательно' : '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Проверка наличия ошибок перед отправкой
        if (Object.values(formErrors).some((error) => error !== '')) {
            console.log('Форма содержит ошибки. Не отправляется.');
            return;
        }

        // Ваша логика обработки отправки формы
        console.log('Form submitted:', formData);
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.forms}>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder={formErrors.username ? formErrors.username : formData.username}
                />
                {/* {formErrors.username && (
                    <span style={{ color: 'red' }}>{formErrors.username}</span>
                )} */}
            </label>

            <label className={styles.forms}>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {formErrors.email && (
                    <span style={{ color: 'red' }}>{formErrors.email}</span>
                )}
            </label>

            <label className={styles.forms}>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {formErrors.password && (
                    <span style={{ color: 'red', border: '1px solid red' }}>
                        {formErrors.password}
                    </span>
                )}
            </label>

            <button type="submit">Отправить</button>
        </form>
    );
};

export default Form;
