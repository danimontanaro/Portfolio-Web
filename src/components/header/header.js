import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa"
import siteConfig from '../../../data/siteConfig'
import LanguageContext from '../contexts/LanguageContext'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #25303B;
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 960px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #25303B;
`

const HeaderLinkGroup = styled.div`
  display: flex;
  flex-direction: row;
` 

const HeaderLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

const LanguajeLink = styled(Link)`
  position: relative;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;

  a.language:hover {
    color: #8533ff;
  }
`

/* const GithubLink = styled(({ className }) => (
  <a 
    className={className}
    href={`https://github.com/${siteConfig.githubUsername}`}
    target='_blank'
    rel="noopener noreferrer"
  >
    <FaGithub size={32} />
  </a>
))`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
` */

class Header extends React.Component {
  static contextType = LanguageContext

  onLanguageChange = language => {
    this.context.setLanguage(language);
    
  }
 
  render () {
    const { headerLinks } = siteConfig
    return (
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLinkGroup>
            {headerLinks.map((headerLink, i) => (
              <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
                {headerLink.label}
              </HeaderLink>
            ))}
          </HeaderLinkGroup>
          {/* <GithubLink /> */}
          <LanguajeLink>
            <a className="language" onClick={()=> this.onLanguageChange('english')} >
              EN
            </a>
            <td />
            <a className="language" onClick={()=> this.onLanguageChange('spanish')} >
               ES
            </a>
          </LanguajeLink>
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header