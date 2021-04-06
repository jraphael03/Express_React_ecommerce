import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

function HomeScreen() {
    return (
        <>
            <h1>Latest Products</h1>
            <Row></Row>
            {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />   {/* Pass in the product('s) from .map to Product component */}
                </Col>
            ))}
        </>
    )
}

export default HomeScreen
