import type {FC} from "react";
import "./App.scss";

const App: FC = () => {
    return (
        <div className="app">
            <div className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Добро пожаловать в ShopHub</h1>
                    <p className="hero-subtitle">
                        Ваш надежный партнер в мире онлайн-шопинга. 
                        Лучшие товары от ведущих производителей по выгодным ценам.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Начать покупки</button>
                        <button className="btn btn-outline">Узнать больше</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="hero-placeholder">
                        <span className="hero-icon">🛍️</span>
                    </div>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <h2 className="section-title">Почему выбирают нас?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚚</div>
                            <h3>Быстрая доставка</h3>
                            <p>Доставка по всей России за 1-3 дня</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🛡️</div>
                            <h3>Безопасная оплата</h3>
                            <p>100% защита ваших платежных данных</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎁</div>
                            <h3>Бонусы и скидки</h3>
                            <p>Накопительная система скидок до 20%</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📞</div>
                            <h3>Поддержка 24/7</h3>
                            <p>Круглосуточная служба поддержки</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="categories">
                <div className="container">
                    <h2 className="section-title">Популярные категории</h2>
                    <div className="categories-grid">
                        <div className="category-card">
                            <div className="category-icon">📱</div>
                            <h3>Смартфоны</h3>
                            <p>Последние модели iPhone и Android</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">💻</div>
                            <h3>Ноутбуки</h3>
                            <p>Производительные рабочие станции</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">📟</div>
                            <h3>Планшеты</h3>
                            <p>Идеальные для работы и развлечений</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">🎧</div>
                            <h3>Аудиотехника</h3>
                            <p>Наушники и колонки премиум качества</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">⌚</div>
                            <h3>Умные часы</h3>
                            <p>Фитнес-трекеры и смарт-часы</p>
                        </div>
                        <div className="category-card">
                            <div className="category-icon">🔌</div>
                            <h3>Аксессуары</h3>
                            <p>Зарядные устройства и чехлы</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">50K+</div>
                            <div className="stat-label">Довольных клиентов</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">1000+</div>
                            <div className="stat-label">Товаров в каталоге</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Поддержка клиентов</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Положительных отзывов</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Готовы начать покупки?</h2>
                        <p>Присоединяйтесь к тысячам довольных клиентов</p>
                        <button className="btn btn-primary btn-large">Перейти в каталог</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
