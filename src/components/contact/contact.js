import React from 'react'

export default ({ title = 'contact me' }) => {
  return (
    <div>
      <h1>{title}</h1>
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
    </div>
  )
}
