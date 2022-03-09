import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Row, Col} from 'react-bootstrap';
import products from '../products';
import Product from '../Components/Product';

//value-12 {Small Screen-Single Product -take full 12}
//value-6 {Medium screen- 2 products}
const HomeScreen = () => {
  return ( 
     <>
     <h1>Latest Products</h1>
     <Row>
       {products.map((product) => (
         <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

           <Product product={product} />

         </Col>
       ))}
     </Row>
     </>
  
  ); 
};

export default HomeScreen;
