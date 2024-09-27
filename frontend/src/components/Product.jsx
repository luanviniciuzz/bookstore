import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating"
import { Link } from "react-router-dom";


function Product({ product }){

function convertDataTime(isoDate){
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate 
}



  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image}/>
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color:'blue' }}>
              <Card.Title as="div">
                 <strong>{product.name}</strong>
              </Card.Title>
              
          </Link>
          <Card.Text>
             Autor: <strong>{product.author}</strong>
          </Card.Text>
          <Card.Text>
              Categoria : <strong>{product.category}</strong>
          </Card.Text>
          <Card.Text>
              Data de publicação : <strong>{convertDataTime(product.publicationDate)}</strong>
          </Card.Text>
         
          <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', color:'green' }}>
            <Card.Text as="h3">
              R$: {product.price}
            </Card.Text>
          </Link>
        </Card.Body>
    </Card>
  )
}

export default Product