import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../Components/ProductCard'
import { productsArray } from '../../ProductsStore';
import '../Pages/Store.css'
const Store = () => {
    return (
        <>
            <div className="container">

                <h1>Welcome to the store.</h1>
                <Row xs={1} md={3} className="g-4">
                    {productsArray.map((product, idx) => (

                        <Col align="center" key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}

                </Row>
            </div>
        </>
    )
}

export default Store
