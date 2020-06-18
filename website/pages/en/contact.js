/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function Contact() {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>
            Get in touch! I'd like to hear from you!
          </p>
          <div className={"contact"}>
            <form action={"/contact-success"} name={"contact"} method={"POST"} data-netlify={"true"}>
              <div>
                <label>
                  Your name
                  <input type="text" name="name" required={true}/>
                </label>
              </div>
              <div>
                <label>
                  Your email
                  <input type="email" name="email" required={true}/>
                </label>
              </div>
              <div>
                <label>
                  What can we do for you?
                  <textarea className={"autosize"} name="message" required={true}/>
                </label>
              </div>
              <div className={"submit"}>
                <button className={"button"} type="submit">
                  Send message
                </button>
              </div>
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
}

Contact.title = 'Reach out';

module.exports = Contact;
