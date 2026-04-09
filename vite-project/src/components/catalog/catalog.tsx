import {type FC, useState} from "react";
import {useNavigate} from "react-router-dom";
import {type Product} from "../../utils/types.ts";
import "./catalog.scss";
import {useGetProductsQuery, useIntoCartMutation} from "./catalogApi";
import {useSortedAndSearch} from "../../utils/hooks/useSearchAndSport.ts";
import {useAuth} from "../../contexts/AuthContext.tsx";

const Catalog: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [activeCategories, setActiveCategories] = useState<string[]>([])

    const {data: products} = useGetProductsQuery()

    const categories = new Set(products?.map(product => product.category))
    const uniqueCategories = Array.from(categories)

    return (
        <div className="catalog">
            <div className="catalog-container">
                <main className="catalog-main">
                    <div className="catalog-header">
                        <h1 className="catalog-title">📦 Каталог товаров</h1>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Поиск товаров..."
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />

                        </div>
                    </div>

                    <div className="catalog-content">
                        <aside className="catalog-sidebar">
                            <div className="filter-section">
                                <h3>Категории</h3>
                                <ul className="category-list">
                                    {uniqueCategories.map((category, index) => (
                                        <li key={index} className="category-item">
                                            <input
                                                type="checkbox"
                                                id={`category-${index}`}
                                                onChange={() => setActiveCategories(prev => prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category])}
                                            />
                                            <label htmlFor={`category-${index}`}>{category}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {products && <ProductList
                            activeCategories={activeCategories}
                            searchQuery={searchQuery}
                            products={products}
                        />}


                        {/*<div className="pagination">*/}
                        {/*    <button className="page-btn">←</button>*/}
                        {/*    <button className="page-btn active">1</button>*/}
                        {/*    <button className="page-btn">2</button>*/}
                        {/*    <button className="page-btn">3</button>*/}
                        {/*    <button className="page-btn">→</button>*/}
                        {/*</div>*/}
                    </div>
                </main>
            </div>
        </div>

    )
}

const ProductList: FC<{
    products: Product[],
    searchQuery: string,
    activeCategories: string[],
}> = (
    {
        products,
        searchQuery,
        activeCategories
    }
) => {
    const navigate = useNavigate();
    const [intoCart] = useIntoCartMutation();
    const {token} = useAuth()

    const sortedProducts = useSortedAndSearch(
        products,
        activeCategories,
        searchQuery
    );

    if (!token) {
        navigate('/login');
        return
    }

    const handleAddToCart = async(productId: number) => {
        try {
            const response = await intoCart({ token: token, productId }).unwrap();

            if (response.ok) {
                navigate(`/cart/${token}`);
            }
        } catch (error) {
            console.error('Ошибка добавления в корзину:', error);
        }
    }

    return (
        <div className="products-grid">
            {sortedProducts && sortedProducts.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="product-image">
                        <img src={product.image} alt={product.name}/>
                        <div className="product-overlay">
                            <button className="quick-view-btn">Быстрый просмотр</button>
                        </div>
                    </div>
                    <div className="product-info">
                        <span className="product-category">{product.category}</span>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                        <div className="product-actions">
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(product.id)}
                            >В корзину</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Catalog
