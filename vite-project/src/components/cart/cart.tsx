import type {FC} from "react";
import "./cart.scss";
import {type Product} from "../../utils/types";

const Cart: FC = () => {
    const products: Product[] = [
        { id: 1, name: "iPhone 15 Pro", price: 129990, image: "/api/placeholder/200/200", category: "Смартфоны", description: "Смартфон" },
        { id: 2, name: "MacBook Air M2", price: 119990, image: "/api/placeholder/200/200", category: "Ноутбуки", description: "Ноутбук" },
        { id: 3, name: "iPad Pro 12.9", price: 99990, image: "/api/placeholder/200/200", category: "Планшеты", description: "Планшет" }
    ];

    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    return (
        <div className="cart">
            <div className="cart-container">
                <h1 className="cart-title">🛒 Ваша корзина</h1>
                
                <div className="cart-content">
                    <div className="cart-items">
                        {products.map(item =>
                            <div className="cart-item">
                                <img src={item.image} alt={item.name} className="item-image" />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p className="item-description">{item.description}</p>
                                    <p className="item-price">{item.price} ₽</p>
                                </div>
                                <div className="item-controls">
                                    <button className="remove-btn">Удалить</button>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <div className="cart-summary">
                        <div className="summary-card">
                            <h3>Итого</h3>
                            <div className="summary-line">
                                <span>Товары ({products.length}):</span>
                                <span></span>
                            </div>
                            <div className="summary-line">
                                <span>Доставка:</span>
                                <span>Бесплатно</span>
                            </div>
                            <div className="summary-total">
                                <span>К оплате:</span>
                                <span>{totalPrice} ₽</span>
                            </div>
                            <button className="checkout-btn">Оформить заказ</button>
                            <button className="continue-btn">Продолжить покупки</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
