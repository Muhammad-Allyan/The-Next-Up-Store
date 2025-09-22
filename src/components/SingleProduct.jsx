import React, { useEffect, useState } from 'react';
import '../style.css';
import { useNavigate, useParams } from 'react-router';

export default function SingleProduct() {
    const navigate = useNavigate();
    const params = useParams(); console.log(params);

    const [product, setProduct] = useState({});
    const handleBack = () => {
        navigate('/products');
    };

    useEffect(() => {

        // Fetch product list
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                // setLoading(false);
            });
    }, []);

    if (!product) return <p>No product selected.</p>;

    return (
        <div id="flex_cont">
            <div id="single_image">
                <div id="single_product_img"><img src={product.thumbnail} alt={product.title} className="card-img-top" />
                </div>
            </div>
            <div id="card_cont">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{product.title}</h3>
                        <p className="card-text">{product.description}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Brand: {product.brand}</li>
                            <li className="list-group-item">Category: {product.category}</li>
                            <li className="list-group-item">Price: ${product.price}</li>
                            <li className="list-group-item">Rating: {product.rating}</li>
                        </ul>
                    </div>
                </div>
                <button className="btn btn-secondary mb-3" onClick={handleBack}>
                    ← Back to Products
                </button>
            </div>
        </div>
    );
}

// New Code With Add to cart