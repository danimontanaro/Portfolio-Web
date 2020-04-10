import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-awesome-styled-grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

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
            <Col xs={4} md={4}>
              <TextField
                className="text-input"
                id="name"
                name="name"
                label="Name"
                variant="outlined"
              />
            </Col>
            <Col xs={4} md={4}>
              <TextField
                className="text-input"
                id="email"
                name="_replyto"
                label="Email"
                variant="outlined"
              />
            </Col>
          </Row>
          <Row className="w100 text-area">
            <TextField
              className="w100"
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows="4"
            />
          </Row>
          <Button
            className="button"
            size="large"
            endIcon={<SendIcon />}
            variant="contained"
            type="submit"
          >
            SEND
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
  .button {
    margin-right: 12em;
    margin-top: 2em;
  }
  
  .text-input {
    margin: 0 0 1.25em;
  }
  @media (min-width: 700px) {
    .text-area {
      padding-left: 0.8em;
      padding-right: 7.8em;
    }
  }
  @media (max-width: 1023px) {
    .text-area {
      width: 100%
    }
    .text-area > div {
      max-width: 14.9em;
    }
  }
`
