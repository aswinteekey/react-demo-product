import React from "react";
import {Card,Button,Row} from 'react-bootstrap';
import { productData } from "./Product.dat";

function HomeProduct() {
  return (
    <div >
      <h2 className="bg-black text-white p-3">Our Products</h2>
      <br/>
      <div className='d-flex'>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4  justify-content-center">
      {productData.map((eachProduct)=>(
        <Card className='m-3 p-1' style={{ width: "18rem"}}>
        <Card.Img variant="top" src={require(`./assets/${eachProduct.image}`)} style={{ height: "18rem"}}/>
        <Card.Body>
          <Card.Title>{eachProduct.name}</Card.Title>
          <p className='m-0'>{eachProduct.desc}</p>
          <p className='m-0'> &#8377; {eachProduct.price}</p>
          <p className='m-2'> <Button style={{ backgroundColor: "#f0f0f0", borderColor: "#f0f0f0", color: "#333" }}>-</Button> {eachProduct.qty} <Button style={{ backgroundColor: "#f0f0f0", borderColor: "#f0f0f0", color: "#333" }}>+</Button></p>
          <Button variant="dark">Add to Cart</Button>
        </Card.Body>
      </Card>

      ))}
      </Row>
      </div>
      
    </div>
  );
}

export default HomeProduct;
