import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import React from 'react';


function ProductCard(props) {
    const product = props.product;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}kr</Card.Text>
                <Card.Img>{product.Image}</Card.Img>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;