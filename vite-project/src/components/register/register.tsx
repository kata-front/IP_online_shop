import type {FC} from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register: FC = () => {
    return (
        <div className="register">
            <div className="register-container">
                <div className="register-card">
                    <div className="register-header">
                        <h1>🎉 Регистрация</h1>
                        <p>Создайте новый аккаунт</p>
                    </div>

                    <form className="register-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">Имя</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    placeholder="Введите ваше имя"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Фамилия</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    placeholder="Введите вашу фамилию"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Введите ваш email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Телефон</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                placeholder="+7 (999) 123-45-67"
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="password">Пароль</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    placeholder="Минимум 8 символов"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                                <input 
                                    type="password" 
                                    id="confirmPassword" 
                                    placeholder="Повторите пароль"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="birthDate">Дата рождения</label>
                            <input 
                                type="date" 
                                id="birthDate"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" required />
                                <span className="checkmark"></span>
                                Я согласен с <Link to="/terms" className="terms-link">условиями использования</Link>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Получать новости и скидки
                            </label>
                        </div>

                        <button type="submit" className="register-btn">
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
