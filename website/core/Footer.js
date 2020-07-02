/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Clarity</h5>
            <a href={this.docUrl('about')}>
              About
            </a>
            <a href={this.docUrl('birds-eye-view')}>
              Bird's-eye view
            </a>
            <a href={this.docUrl('implementation')}>
              Implementing Clarity
            </a>
            <a href={this.docUrl('faq')}>
              Frequent Questions
            </a>
          </div>
          {/*<div>*/}
          {/*  <h5>Community</h5>*/}
          {/*  <a href={this.pageUrl('users.html', this.props.language)}>*/}
          {/*    User Showcase*/}
          {/*  </a>*/}
          {/*  <a*/}
          {/*    href="https://stackoverflow.com/questions/tagged/"*/}
          {/*    target="_blank"*/}
          {/*    rel="noreferrer noopener">*/}
          {/*    Stack Overflow*/}
          {/*  </a>*/}
          {/*  <a href="https://discordapp.com/">Project Chat</a>*/}
          {/*  <a*/}
          {/*    href="https://twitter.com/"*/}
          {/*    target="_blank"*/}
          {/*    rel="noreferrer noopener">*/}
          {/*    Twitter*/}
          {/*  </a>*/}
          {/*</div>*/}
          <div>
            <h5>More</h5>
            <a href="https://github.com/clarity-pm/clarity">GitHub</a>
            <div>
              <a
                href={"https://tinyletter.com/claritypm"}>
                Subscribe to updates
              </a>
            </div>
            <div>
              <a
                href={this.pageUrl('contact')}>
                Contact
              </a>
            </div>
            <div>
              <a href={this.docUrl('legal')}>
                Legal
              </a>
            </div>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
        <section className="copyright copyright-mini">
          Clarity Work Management Framework&trade;,
          Clarity Agile Work Management Framework&trade;,
          Clarity In Project Management&trade;,
          Clarity Project Management Framework&trade;
          Clarity Express&trade;
          - copyright &copy; 2020 Matiss Treinis
        </section>
        <noscript>
          <div><img src={'https://mc.yandex.ru/watch/64763683'} style={{position: 'absolute', left: '-9999px'}}
                    alt={''}/></div>
        </noscript>
      </footer>
    );
  }
}

module.exports = Footer;
