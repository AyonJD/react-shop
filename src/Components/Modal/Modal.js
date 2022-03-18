import React, { useState } from 'react';
import { Button, Modal, } from 'react-bootstrap';


const ProductModal = (props) => {
    const { title, description, image } = props.product;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className ='bg-success text-white'>
                    <Modal.Title className='me-2'>{ title }</Modal.Title>
                </Modal.Header>
                <img src={image} className='w-50 mx-auto py-3' alt=""/>
                <Modal.Body>{description}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProductModal;