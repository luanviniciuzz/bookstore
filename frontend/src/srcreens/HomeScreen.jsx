import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../../produtos'
import Product from '../components/Product'

function HomeScreen(){
  return (
    <div>
       <h1>Latest Products</h1>
          <div>
              <Row>
                  {products.map(p => (
                      <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                          <Product product={p}/>
                      </Col>
                  ))}
              </Row>
          </div>
    </div>
  )
}

export default HomeScreen