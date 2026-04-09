import type {FC} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./register.scss";
import {type RegisterReq} from "../../utils/types";
import {registerApi} from "./regApi";
import { useAuth } from "../../contexts/AuthContext";

const Register: FC = () => {
    const { login } = useAuth()
    const [register] = registerApi.useRegisterMutation()
    const navigate = useNavigate()

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!e.currentTarget.firstName.value
            || !e.currentTarget.lastName.value
            || !e.currentTarget.email.value
            || !e.currentTarget.phone.value
            || !e.currentTarget.password.value
            || !e.currentTarget.confirmPassword.value
            || !e.currentTarget.birthDate.value
            || !e.currentTarget.terms.checked
        )
        {
            alert('Пожалуйста, заполните все поля и примите условия использования')
            return
        }

        if (e.currentTarget.password.value !== e.currentTarget.confirmPassword.value) {
            alert('Пароли не совпадают')
            return
        }

        if (e.currentTarget.password.value.length < 8) {
            alert('Пароль должен содержать минимум 8 символов')
            return
        }

        const data: RegisterReq = {
            name: e.currentTarget.firstName.value,
            lastName: e.currentTarget.lastName.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            phone: e.currentTarget.phone.value,
            birthDate: e.currentTarget.birthDate.value
        }

        const response = await register(data)

        if (response.error) return
        if (response.data.ok) {
            login(response.data.token)
            navigate('/')
            return
        } else {
            alert('Ошибка регистрации')
        }
    }

    return (
        <div className="register">
            <div className="register-container">
                <div className="register-card">
                    <div className="register-header">
                        <h1>🎉 Регистрация</h1>
                        <p>Создайте новый аккаунт</p>
                    </div>

                    <form className="register-form" onSubmit={handleSubmit}>
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
                                <input type="checkbox" name="terms" id="terms" required />
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
