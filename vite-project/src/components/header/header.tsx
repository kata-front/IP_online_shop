import type {FC} from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header: FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <Link to="/" className="logo">
                        <span className="logo-icon">🛍️</span>
                        <span className="logo-text">ShopHub</span>
                    </Link>
                </div>
                
                <nav className="header-nav">
                    <Link to="/catalog" className="nav-link">
                        <span className="nav-icon">📦</span>
                        Каталог
                    </Link>
                    <Link to="/cart" className="nav-link">
                        <span className="nav-icon">🛒</span>
                        Корзина
                    </Link>
                    <Link to="/profile" className="nav-link">
                        <span className="nav-icon">👤</span>
                        Профиль
                    </Link>
                </nav>

                <div className="header-actions">
                    <Link to="/login" className="btn btn-outline">Вход</Link>
                    <Link to="/register" className="btn btn-primary">Регистрация</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
