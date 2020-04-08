import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-awesome-styled-grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = ({ className, title = 'contact me' }) => {
  return (
    <div className={className}>
      <Row>
        <h1>{title}</h1>
      </Row>
      <Row align="center" justify="center">
        <form
          method="post"
          className="contact-form w100"
          action="https://formspree.io/dani.montanaro21@gmail.com"
        >
          <Row className="w100">
            <Col xs={4} sm={4}>
              <TextField id="name" name="name" label="Name" />
            </Col>
            <Col xs={4} sm={4}>
              <TextField id="email" name="_replyto" label="Email" type="email" />
            </Col>
          </Row>
          <Row className="w100">
            <TextField 
              className="w100"
              id="message" 
              name="message"
              label="Message" 
              multiline
              rows="4"
            />
          </Row>
          <Button size="large" variant="outlined" type="submit">
            Send Message
          </Button>
        </form>
      </Row>
    </div>
  )
}

export default styled(Contact)`
  .w100 {
    width: 100%;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`
