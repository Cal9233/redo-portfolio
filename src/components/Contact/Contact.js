import React, {useEffect} from 'react'; 
import emailjs from 'emailjs-com';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Container, Form, Button } from "react-bootstrap";
import "../../style.css";


const Contact = () => {
  useEffect(() => {
    Aos.init({ duration:2000 })
  }, [])


  function sendEmail(e) {
    e.preventDefault();
    emailjs
    .sendForm(
      `${process.env.REACT_APP_EMAILJS_SERVICE}`,
      `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
      e.target,
      `${process.env.REACT_APP_EMAILJS_USER}`
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Email Sent!");
      },
      (error) => {
        console.log(error.text);
        alert("Something Went Wrong")
      }
    );
    
  };


  return (
   <>
   <Container fluid className="contact-section">
    <Container>
      <h1 className="contact-heading">Contact Me!</h1>
    
      <Form onSubmit={sendEmail}>
      <Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control type="name" placeholder="Enter Full Name" name="user_name" />
				</Form.Group>
        <Form.Group controlId="formBasicCompanyName">
					<Form.Label>Company Name</Form.Label>
					<Form.Control type="name" placeholder="Enter Company Name" name="company_name" />
				</Form.Group>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" name="user_email" />
				</Form.Group>
				<Form.Group controlId="formBasicMessage">
					<Form.Label>Message</Form.Label>
					<Form.Control type="message" placeholder="Message" name="message" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
  				</Button>
			</Form>

     
      
    </Container>
   </Container>
   </>
  )
}

export default Contact
