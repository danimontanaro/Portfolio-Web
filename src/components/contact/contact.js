import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-awesome-styled-grid'
import { ThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'
import grey from '@material-ui/core/colors/grey'

const Contact = ({className, title = 'contact me' }) => {
  const customTheme = createMuiTheme({
    palette: {
      primary: blueGrey,
      secondary: grey,
    },
    status: {
      danger: 'red',
    },
  })
  return (
    <ThemeProvider theme={customTheme}>
      <div className={className}>
        <Row className="contact-title">
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
                  required
                />
              </Col>
              <Col xs={4} md={4}>
                <TextField
                  className="text-input"
                  id="email"
                  name="_replyto"
                  label="Email"
                  variant="outlined"
                  required
                />
              </Col>
            </Row>
            <Row className="w100 text-area">
              <TextField
                color="third"
                className="w100"
                id="message"
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows="4"
                required
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
    </ThemeProvider>
  )
}

export default styled(Contact)`
  .contact-title {
    margin-left: 0;
  }
  .w100 {
    width: 100%;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button {
    margin-top: 2em;
  }

  .text-input {
    margin: 0 0 1.25em;
    width: 100%;
  }
  .text-area {
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }
  @media (max-width: 1023px) {
    .text-area {
      width: 100%;
    }
  }
`
