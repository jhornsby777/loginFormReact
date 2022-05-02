import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function NavbarWrapper() {
    return (
        <div>
            <Navbar bg ='dark' expand ='lg'>
                <Nav.Link href ='#'>Link</Nav.Link>
                <Nav.Link href ='#'>Link</Nav.Link>
                <Nav.Link href ='#'>Link</Nav.Link>
            </Navbar>
        </div>
    )
}
