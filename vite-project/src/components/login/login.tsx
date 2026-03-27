import type {FC} from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login: FC = () => {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h1>🔐 Вход в аккаунт</h1>
                        <p>Добро пожаловать!</p>
                    </div>

                    <form className="login-form">
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
                            <label htmlFor="password">Пароль</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Введите ваш пароль"
                                required
                            />
                        </div>

                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Запомнить меня
                            </label>
                            <Link to="/forgot-password" className="forgot-link">
                                Забыли пароль?
                            </Link>
                        </div>

                        <button type="submit" className="login-btn">
                            Войти
                        </button>

                        <div className="register-link">
                            <p>Еще нет аккаунта? <Link to="/register">Зарегистрироваться</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
