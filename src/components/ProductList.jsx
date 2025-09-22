import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import '../style.css';
import Checkout from './Checkout';

export default function ProductList({ onProductClick, onAddToCart }) {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch product categories
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data));

        // Fetch product list
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            });
    }, []);


    function onProductClick(id) {
        navigate(`/products/${id}`);
    }

    return (
        <div id="container">
           <div id="category-sidebar">
                <h4>Our Categories</h4>
                <ul id="category-list">
                    {categories?.map((cat, index) => (
                        <li key={index}>{cat.name}</li>
                    ))}
                </ul>
            </div>

            {loading ? (
                <div id="loading">Loading...</div>
            ) : (
                <div id="product-container">
                    {products?.map(product => (
                        <div key={product.id} className="card">
                            <img src={product.thumbnail} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <div className="d-flex gap-2">
                                    <button
                                        onClick={() => onProductClick(product.id)}
                                        className="btn btn-primary"
                                    >
                                        View
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => onAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
