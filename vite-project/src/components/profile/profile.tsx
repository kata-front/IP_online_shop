import type {FC} from "react";
import "./profile.scss";

const Profile: FC = () => {
    return (
        <div className="profile">
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-info">
                        <h1 className="profile-name">Александр Иванов</h1>
                        <p className="profile-email">alex.ivanov@example.com</p>
                        <p className="profile-status">Премиум участник с 2023</p>
                    </div>
                </div>

                <div className="profile-content">
                    <aside className="profile-sidebar">
                        <nav className="profile-nav">
                            <ul className="nav-list">
                                <li className="nav-item active">
                                    <button className="nav-btn">👤 Личные данные</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-btn">📦 Заказы</button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-btn logout">🚪 Выйти</button>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    <main className="profile-main">
                        <div className="profile-section">
                            <h2>Личные данные</h2>
                            <form className="profile-form">
                                <div className="form-group">
                                    <label>Имя</label>
                                    <input type="text" defaultValue="Александр" />
                                </div>
                                <div className="form-group">
                                    <label>Фамилия</label>
                                    <input type="text" defaultValue="Иванов" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" defaultValue="alex.ivanov@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Телефон</label>
                                    <input type="tel" defaultValue="+7 (999) 123-45-67" />
                                </div>
                                <div className="form-group">
                                    <label>Дата рождения</label>
                                    <input type="date" defaultValue="1990-01-01" />
                                </div>
                                <div className="form-actions">
                                    <button type="submit" className="save-btn">Сохранить изменения</button>
                                    <button type="button" className="cancel-btn">Отмена</button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Profile
