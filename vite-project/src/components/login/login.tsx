import type {FC} from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import { type Login } from "../../utils/types";
import loginApi from "./loginApi.ts";

const Login: FC = () => {
    const [login] = loginApi.useLoginMutation()

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!e.currentTarget.email.value
            || !e.currentTarget.password.value
            || e.currentTarget.password.value.length < 8
            || !e.currentTarget.remember.checked
        )
        {
            alert('Пожалуйста, заполните все поля и чекбокс')
        }

        const data: Login = {
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value
        }

        const responce = await login(data)
        console.log(responce)
    }

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <h1>🔐 Вход в аккаунт</h1>
                        <p>Добро пожаловать!</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
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
                                <input type="checkbox" name="remember" id="remember"/>
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
