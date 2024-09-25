import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
import API from '../services/API'

function HomeScreen(){
  const [products, setProducts] = useState([])

  useEffect(() => {

    async function fetchProducts(){
      const{ data } = await API.get('/api/products/')
      setProducts(data)
    }
    fetchProducts()
  },[])

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