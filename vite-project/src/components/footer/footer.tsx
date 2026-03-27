import type {FC} from "react";
import "./footer.scss";

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-icon">🛍️</span>
                            <span className="logo-text">ShopHub</span>
                        </div>
                        <p className="footer-description">
                            Ваш надежный партнер в мире онлайн-шопинга. 
                            Лучшие товары, выгодные цены и отличный сервис.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Контакты</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span>8 (800) 123-45-67</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <span>info@shophub.ru</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 ShopHub. Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
