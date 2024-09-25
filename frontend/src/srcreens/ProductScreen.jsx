import React, {useState, useEffect} from "react";
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from "../components/Rating";
import products from "../../produtos";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import API from '../services/API'


function ProductScreen() {
  const { id } = useParams(); 
  const [product, setProduct] = useState([])

  useEffect(() => {

    async function fetchProduct(){
      const{ data } = await API.get(`/api/product/${id}/`)
      setProduct(data)
      console.log(match)
    }

    fetchProduct()
  },[])
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">Voltar</Link>
      <Row>
         <Col md={6}>
              <Image src={product.image} fluid/>
         </Col>


         <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} comentários`} color={"#f39c12"}/>
            </ListGroup.Item>

            <ListGroup.Item>
              Preço: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
               Sinopse: {product.description}
            </ListGroup.Item>

            <ListGroup.Item>
               Autor: {product.author}
            </ListGroup.Item>

            <ListGroup.Item>
               Categoria: {product.category}
            </ListGroup.Item>

            <ListGroup.Item>
              Data de publicação : {product.publicationDate}
            </ListGroup.Item>

            <ListGroup.Item>
              {product.pages} páginas
            </ListGroup.Item>
           

          </ListGroup>
         </Col>



         <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Preço:</Col>
                    <Col>
                      <strong>R${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Situação:</Col>
                    <Col>
                      <strong>{product.countInStock > 0 ? "Em estoque" : "Fora de estoque"}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Button className="btn-black" disabled={product.countInStock == 0} type="button">Adicionar ao carrinho</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
         </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;