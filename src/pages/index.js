import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import siteConfig from '../../data/siteConfig'
import siteConfigSpanish from '../../data/siteConfigSpanish'

import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Contact from '../components/contact'
import Skills from '../components/skills'
import Timeline from '../components/timeline'
import Repositories from '../components/repositories'
import LanguageContext from '../components/contexts/LanguageContext'

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
`

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { language:'english', config: siteConfig };
    }

  setLanguage = newLanguage => {
    this.setState ({ language: newLanguage });
    if (newLanguage === 'english'){
      this.setState({ config:siteConfig });
    } else
    {
      this.setState({ config:siteConfigSpanish });
    }
    console.log(this.state)
  } 
  
  render() {
    // validate siteConfig settings
    if (this.state.config.googleAnalyticsId === 'UA-000000000-1') {
      console.error(
        'WARNING: Please set a proper googleAnalyticsId. See https://analytics.google.com for details.'
      )
    }

    const title = this.state.config.siteTitle
    const { keywords } = this.state.config
    return (
      <LanguageContext.Provider value={{language:this.state.languaje,
                                        config:this.state.config,
                                        setLanguage:this.setLanguage}}>
        <Layout location={this.props.location}>
          <SEO title={title} keywords={keywords} />

          <Hero heroImg={this.state.config.siteCover} title={title} />

          <Wrapper className={this.props.className}>
            <Container className="page-content" fluid>
              <Row>
                <Col xs={4} className="avatar">
                  <img
                    className="avatar__image"
                    src="/images/avatar.jpeg"
                    alt="user avatar"
                  />
                  <div className="social">
                    {this.state.config.social.github && (
                      <a
                        className="social-link github"
                        href={this.state.config.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="social-icon" size="32" />
                      </a>
                    )}
                    {this.state.config.social.linkedin && (
                      <a
                        className="social-link linkedin"
                        href={this.state.config.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="social-icon" size="32" />
                      </a>
                    )}
                    {/* {this.state.config.social.twitter && (
                      <a
                        className="social-link twitter"
                        href={this.state.config.social.twitter}
                      >
                        <FaTwitter className="social-icon" size="32" />
                      </a>
                    )}
                    {this.state.config.social.email && (
                      <a
                        className="social-link email"
                        href={`mailto:${this.state.config.social.email}`}
                      >
                        <FaEnvelope className="social-icon" size="32" />
                      </a>
                    )} */}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={4} sm={4}>
                  <About title={this.state.config.titleAbout} text={this.state.config.authorDescription} />
                </Col>
                <Col xs={4} sm={4}>
                  <Skills title={this.state.config.titleSkills} skills={this.state.config.skills} />
                </Col>
              </Row>
              <Separator />
              <Timeline />
              <Separator />
              <Repositories />
              <Contact title={this.state.config.titleContact} />
            </Container>
          </Wrapper>
        </Layout>
      </LanguageContext.Provider>
    )
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`
