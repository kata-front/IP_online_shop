import type {FC} from "react";
import "./catalog.scss";

const Catalog: FC = () => {
    const products = [
        { id: 1, name: "iPhone 15 Pro", price: "129 990 ₽", image: "/api/placeholder/200/200", category: "Смартфоны" },
        { id: 2, name: "MacBook Air M2", price: "119 990 ₽", image: "/api/placeholder/200/200", category: "Ноутбуки" },
        { id: 3, name: "iPad Pro 12.9", price: "99 990 ₽", image: "/api/placeholder/200/200", category: "Планшеты" }
    ];

    const categories = ["Все товары", "Смартфоны", "Ноутбуки", "Планшеты"];

    return (
        <div className="catalog">
            <div className="catalog-container">
                <div className="catalog-header">
                    <h1 className="catalog-title">📦 Каталог товаров</h1>
                    <div className="search-bar">
                        <input type="text" placeholder="Поиск товаров..." className="search-input" />
                        <button className="search-btn">🔍</button>
                    </div>
                </div>

                <div className="catalog-content">
                    <aside className="catalog-sidebar">
                        <div className="filter-section">
                            <h3>Категории</h3>
                            <ul className="category-list">
                                {categories.map((category, index) => (
                                    <li key={index} className="category-item">
                                        <input type="checkbox" id={`category-${index}`} />
                                        <label htmlFor={`category-${index}`}>{category}</label>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="filter-section">
                            <h3>Цена</h3>
                            <div className="price-filter">
                                <input type="number" placeholder="От" className="price-input" />
                                <span>-</span>
                                <input type="number" placeholder="До" className="price-input" />
                            </div>
                        </div>

                        <div className="filter-section">
                            <h3>Сортировка</h3>
                            <select className="sort-select">
                                <option>По популярности</option>
                                <option>По цене (возр.)</option>
                                <option>По цене (убыв.)</option>
                                <option>По новизне</option>
                            </select>
                        </div>
                    </aside>

                    <main className="catalog-main">
                        <div className="products-grid">
                            {products.map((product) => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                        <div className="product-overlay">
                                            <button className="quick-view-btn">Быстрый просмотр</button>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <span className="product-category">{product.category}</span>
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-price">{product.price}</p>
                                        <div className="product-actions">
                                            <button className="add-to-cart-btn">В корзину</button>
                                            <button className="favorite-btn">❤️</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pagination">
                            <button className="page-btn">←</button>
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <button className="page-btn">→</button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Catalog
