import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'

export default ({ title = 'contact me' }) => {
  return (
    <Row>
      <Col>
        <h1>{title}</h1>
      </Col>
      <Col align="center" justify="center">
        <form
          method="post"
          action="https://formspree.io/dani.montanaro21@gmail.com"
        >
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile">
              <input type="email" name="_replyto" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </Col>
    </Row>
  )
}
