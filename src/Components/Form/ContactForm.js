import { Form } from 'react-bootstrap'
import './ContactForm.css'

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formElements = e.target.elements
    const data = {
      fname: formElements.fname.value,
      lname: formElements.lname.value,
      email: formElements.email.value,
      number: formElements.number.value,
      companyName: formElements.companyName.value,
      message: formElements.message.value,
    }

    const {fname,lname,email,number,companyName,message} = data;
    
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();
    
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
        // update the response state and the step
        
        this.setState ({
            emailStatus: xhr.responseText
        });
    });
    // open the request with the verb and the url
    xhr.open('GET', 'https://baten.me/risad/sendemail/index.php?sendto=' + email + 
                            '&fname=' + fname + 
                            '&message=' + message + '&lname=' + lname + '&number=' + number + '&message=' + message + '&companyName'+ companyName);
    // send the request
    xhr.send();

    // reset the fields
    e.target.reset()
  }

  return (
    <>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-1" controlId="formBasicFName">
            <Form.Label>
              First Name<span className="required">*</span>
            </Form.Label>
            <Form.Control type="text" name="fname" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicLName">
            <Form.Label>
              Last Name<span className="required">*</span>
            </Form.Label>
            <Form.Control type="text" name="lname" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>
              Email<span className="required">*</span>
            </Form.Label>
            <Form.Control type="email" name="email" />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicNumber">
            <Form.Label>
              Contact Number<span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="(506) 234-5678"
              name="number"
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicOrganizationName">
            <Form.Label>Your Organization</Form.Label>
            <Form.Control type="text" name="companyName" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" />
          </Form.Group>

          <div className="formBtn">
            <input className="button" type="submit" value="Submit" />
          </div>
        </Form>
      </div>
    </>
  )
}

export default ContactForm
