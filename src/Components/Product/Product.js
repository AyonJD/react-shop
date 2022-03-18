import React from 'react';
import { Button, Card} from 'react-bootstrap';
import ProductModal from '../Modal/Modal';
import './Product.css'

const Product = props => {
    const { setCount } = props;
    const { image, title, description, price, rating } = props.product;
    return (
        <div className='col-md-4 col-sm-6 col-12 mb-3'>
                <Card className='m-2 card-height'>
                    <Card.Img variant="top" src={image} className = 'w-50 mx-auto mt-4'/>
                    <Card.Body className = 'd-flex flex-column justify-content-end'>
                        <div className="card-content">
                            <Card.Title>{ title }</Card.Title>
                            <Card.Text>
                                {description.slice(0, 100)}...
                            </Card.Text>
                        </div>
                        <div className="price">
                            <h3 className='mt-2 text-success'>${price}</h3>
                            <div className="rating d-flex align-items-center">
                                <h5 className='mb-0 me-1'>{rating.rate}</h5>
                                <i className='fa-solid fa-star star-icon text-warning'></i>
                                <h5 className='mb-0 ms-auto'>{ rating.count }</h5>
                            </div>
                        </div>
                        <div className="card-button mt-4">
                            <ProductModal className='btn btn-success m-2' product = {props.product}></ProductModal>
                            <Button onClick={setCount} className='btn btn-success m-2'>Add to Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Product;