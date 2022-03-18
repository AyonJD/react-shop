import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = (props) => {
    const { setCount } = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <div className='row'>
                <CardGroup>
                {
                    products.map(product => <Product setCount = {setCount} product = {product} key = {product.id}></Product>)
                }
                </CardGroup>
            </div>
        </div>
    );
};

export default Products;