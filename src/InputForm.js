import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function InputForm() {
    return (
        <div className ='inputFormDiv'>
            <div className ='thisDiv'>
                <Form>
                    <Form.Group className='mb-3' controlID='formBasicUsername'>
                        <Form.Label><h3>Log In</h3></Form.Label>
                        <Form.Control type= 'username' placeholder='Enter your username'/>
                    </Form.Group>
                    <Form.Group className='mb-4' controlID='formPassword'>
                        <Form.Label></Form.Label>
                        <Form.Control type= 'password' placeholder='Enter your password'/>
                    </Form.Group>
                    <Button variant ='primary' type ='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    )
}
