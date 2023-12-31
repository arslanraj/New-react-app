import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

function Contact() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    msg: ""
  });

  function submitInfo() {
    console.log(userInfo);
  }

  return (
    <div>
      <Form style={{ width: "40rem", marginLeft: "20rem", marginTop: "10rem", marginBottom: "8rem" }}>
        <h1 className='mb-5'> Contact Us</h1>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Your Message </Form.Label>
          <Form.Control value={userInfo.msg} onChange={(e) => setUserInfo({ ...userInfo, msg: e.target.value })} as="textarea" rows={3} />
          <Button variant="primary" onClick={() => submitInfo()} className='mt-2'>Submit</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Contact;
