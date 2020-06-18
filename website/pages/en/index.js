const React = require('react');

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="wrapper homeWrapper">{props.children}</div>
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>Agile Work Management Framework</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button cta" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title}/>
        <PromoSection>
          <Button href={docUrl('about')}>Discover Clarity</Button>
        </PromoSection>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language}/>
      </div>
    );
  }
}

Index.description = 'Clarity is a novel agile work management framework designed for teams. It suits well for organizing projects and continuous work assignments.';

module.exports = Index;
