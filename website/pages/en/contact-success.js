/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

function ContactSuccess() {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="contact-success">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <div className={"ok"}>
            All sent! I will get back to you as soon as possible!
          </div>
          <div className={"next"}>
            <a href={"/contact"}>Go back</a> or <a href={"/docs/about"}>return to documentation</a>.
          </div>
        </div>
      </Container>
    </div>
  );
}

ContactSuccess.title = 'Message sent';

module.exports = ContactSuccess;
