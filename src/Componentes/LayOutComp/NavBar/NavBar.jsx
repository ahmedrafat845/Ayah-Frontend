import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { mediaContext } from '../../../Context/MediaStore';
import logo from "../../../images/صل على محمد.jpg"
import style from "./NavBar.module.scss"



export default function NavBar() {
  let {userData,LogOut}= useContext(mediaContext)


    
  return (
    <>
       <Navbar expand="lg" className={`${style.bgNav} `}>
        <Container fluid>
            <Navbar.Brand href="#" className='fw-bold fs-4 text-muted  '> آية (صل علي محمد)🧡</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ms-auto  my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {userData?(
                  <>
                    <Nav.Link href="#"><Link className='nav-link' to=''>الصفحه الرئيسيه</Link></Nav.Link>
                    <Nav.Link href="#"><Link className='nav-link' to='Azkar'>الاذكار</Link></Nav.Link>
                    <Nav.Link href="#"><Link className='nav-link' to='Ahadith'>الاحاديث</Link></Nav.Link>
                    <Nav.Link href="#"><Link className='nav-link' to='Roqya'>الرقيه الشرعيه</Link></Nav.Link>
                    <Nav.Link href="#"><Link className='nav-link' to='Sebha'>سبحه</Link></Nav.Link>

                  </>
                ):('')}
                
                
                
               
                
            </Nav>
            <Form className="d-flex justify-content-end pb-2  ps-4">

           
                {userData?(
                  <>
                    
                    <Link href="#"><button onClick={LogOut} className={`${style.btn} btn btn-danger  mt-2 `}>خروج</button></Link>
                  </>
                ):('')}
                <img src={logo} className={`${style.logo} me-3 `} alt="" />

                
                
            </Form>
            </Navbar.Collapse>
        </Container>
       </Navbar>

    
    </>
  )
}
