import React, { useState } from 'react'
import {Button,Card, Col, Container, container, Row} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { Footer } from './Footer';
import { Header } from './Header';

import Table from 'react-bootstrap/Table';

function Contact() {

    let [formdata, setformdata] =useState({
        uname: '',
        email: '',
        phone: '',
        message: '',
        index: ''
    })
   
    let getvalue = (event) => {
        let oldData = {...formdata}
        let inputName = event.target.name
        let inputVal = event.target.value
        oldData[inputName] = inputVal
        setformdata(oldData);  
    }
    
    let [userData, setuserData] = useState([])

    let handleSubmit = (event) => {

        event.preventDefault()
        let currentUserFormData = {
            uname:formdata.uname, 
            email:formdata.email, 
            phone:formdata.phone, 
            message:formdata.message
        }

        
        let checkFilteruser = userData.filter((v) => v.email== formdata.email || v.phone==formdata.phone)

        if(checkFilteruser.length == 1){
            toast.error("duplicated entry")
        }
        
       let oldUserData = [...userData, currentUserFormData]
       //console.log(oldUserData)
       setuserData(oldUserData)
       setformdata({
        uname: '',
        email: '',
        phone: '',
        message: '',
        index: ''
    });
    }

   

    let deleteRaw = (indexNum) => {
        //alert(indexNum)
        let filterDataAfterDel = userData.filter((v,i)=>
            i!=indexNum    )    

        setuserData(filterDataAfterDel)
    }
  return (
    
    <div className='App'>
    <Container fluid>
    <Header />
      <ToastContainer/>
          <Container>
            <Row>
                  <Col className='col-12 text-center py-4'>
                      <h1>Contact us</h1> 
                  </Col>
              </Row>
              <Row>
                  <Col className='col-12 text-center py-4 '>

                     <form onSubmit={handleSubmit}>

                        <div className='text-start my-3'>
                            <label>Username</label>
                            <input type='text' onChange={ getvalue} name="uname" value={formdata.uname}  className='form-control' />
                        </div>

                        <div className='text-start my-3'>
                            <label>Email</label>
                            <input type='text' onChange={getvalue } name='email' value={formdata.email} className='form-control' />
                        </div>

                        <div className='text-start my-3'>
                            <label>Phone</label>
                            <input type='text' onChange={ getvalue } name='phone' value={formdata.phone} className='form-control' />
                        </div>

                        <div className='text-start my-3'>
                            <label>Message</label>
                            <input type='text' onChange={getvalue } name='message' value={formdata.message} className='form-control' />
                        </div>

                        <div className='text-start my-3'>
                            <button> {formdata.index !== "" ? 'Update' : 'Save'} </button>
                        </div>
                     </form>
                  </Col>
              </Row>
              <Row>
                <Col className='col-12 text-center py-4 '>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.length >0 ? 

                        userData.map((obj,i) => {
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{obj.uname}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.phone}</td>
                                    <td>{obj.message}</td>
                                    <td><button onClick={()=>deleteRaw(i)}>Delete</button>  <button>Edit</button></td>
                                </tr>
                            )
                        })

                        
                        : <tr><td colSpan={6}>No data Found</td></tr> }
                    </tbody>
                    </Table>
                </Col>
              </Row>
            </Container>
            <Footer/>
            
        </Container>
    </div>
   
  )
}

export default Contact
