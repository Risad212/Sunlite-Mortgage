import { useState } from 'react'
import { Form } from 'react-bootstrap'
import './ContactForm.css'

const ContactForm = () => {
  const [formInfo, setFormInfo] = useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
    companyName: '',
    message: '',
  })

  const handleOnChange = (e) => {
    const newFormInfo = { ...formInfo }
    newFormInfo[e.target.name] = e.target.value
    setFormInfo(newFormInfo)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // method number 2
    //-----------------------------
    // const formElements = e.target.elements
    // const data = {
    //   fname: formElements.fname.value,
    //   lname: formElements.lname.value,
    //   email: formElements.email.value,
    //   number: formElements.number.value,
    //   companyName: formElements.companyName.value,
    //   message: formElements.message.value,
    // }

    const res = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formInfo),
    })
    const data = await res.json()
    console.log(data)

    // clear all field
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
            <Form.Control type="text" name="fname" onChange={handleOnChange} />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicLName">
            <Form.Label>
              Last Name<span className="required">*</span>
            </Form.Label>
            <Form.Control type="text" name="lname" onChange={handleOnChange} />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>
              Email<span className="required">*</span>
            </Form.Label>
            <Form.Control type="email" name="email" onChange={handleOnChange} />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicNumber">
            <Form.Label>
              Contact Number<span className="required">*</span>
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="(506) 234-5678"
              name="number"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicOrganizationName">
            <Form.Label>Your Organization</Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              onChange={handleOnChange}
            />
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
