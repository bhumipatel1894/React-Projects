import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import {Button,Card, Col, Container, container, Row} from 'react-bootstrap'
import { Footer } from './Footer';
import { Header } from './Header';

function Products() {

    let [finalcat, Setfinalcat] = useState([])
    let [finalprod, Setfinalprod] = useState([])
    let [getcatname, Setgetcatname] = useState("")

    let Getcat = () => {
        return(
            axios.get('https://dummyjson.com/products/category-list').then(
                (res) => res.data
            ).then((finalRes) => Setfinalcat(finalRes))            
        )
    }

    let GetProducts = () => {
        return(
            axios.get('https://dummyjson.com/products').then(
                (prores) => prores.data
            ).then((finalRes) => Setfinalprod(finalRes.products))
        )
    }

    useEffect(()=>{
        //console.log(getcatname)
        if(getcatname !== ''){
            axios.get(`https://dummyjson.com/products/category/${getcatname}`).then(
                (prores) => prores.data
            ).then((finalRes) => Setfinalprod(finalRes.products))
        }
       
    }, [getcatname])

    useEffect(() => { 
        console.log(getcatname)
        Getcat() 
        GetProducts()
    }, [])

    let cat = finalcat.map((v,i) =>{
        return(
            <li onClick={ () => Setgetcatname(v) } key={i}>{v}</li> 
        )
    }) 

    let prod = finalprod.map((v,i) => {

        return(            
            <ProductItems key={i} pdata={v}/> 
         )        
    })

  return (
    
    <Container fluid>
        <Header />
    <Container>
      <Row>
            <Col className='col-12 text-center py-4'>
                <h1>Our Products</h1> 
            </Col>
        </Row>
    <Row>
      <Col className='col-3 text-center py-4 categories'>
        <h2>Categories</h2>
        
        <ul>
            {cat}
        </ul>
      </Col>
      <Col className='col-9 text-center py-4'>
        <Row>

        {
            finalprod.length > 0 ? prod : '<h2>No Products Found!</h2>'
        }
            
        
      
        </Row>
        </Col>
      
      </Row>
      
    </Container>
    <Footer/>
   
</Container>
  )
}

export default Products

function ProductItems({pdata}){

   //console.log(pdata);
    return(
        
        
            <Col lg="3" md="6" className='pb-4'>                
            <Card style={{ width: '18rem' }}>                    
                <Card.Body>
                <img src={pdata.thumbnail}></img>
                <Card.Title>{pdata.title}</Card.Title>
                <Card.Text>{pdata.category}</Card.Text>
                <Button variant="primary">Buy Now</Button>
                <Card.Text>
                    ${pdata.price}
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
           
        
       
    )
}