import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Footer = () => {
  function getYear() {
    return new Date().getFullYear()
  }
  return (
    <footer className='footer-dark'>
      <Container>
        <Row>
          <Col sm={6} md={3} className='item'>
            <h3>Services</h3>
            <ul>
              <li>
                <LinkContainer to={'/'}>
                  <span>Web design</span>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={'/'}>
                  <span>Development</span>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={'/'}>
                  <span>Hosting</span>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3} className='item'>
            <h3>About</h3>
            <ul>
              <li>
                <LinkContainer to={'/'}>
                  <span>Company</span>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={'/'}>
                  <span>Team</span>
                </LinkContainer>
              </li>
              <li>
                <LinkContainer to={'/'}>
                  <span>Careers</span>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3} className='item'>
            <h3>Company Name</h3>
            <p>
              Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus
              ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique
              lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.
            </p>
          </Col>
          <Col sm={6} md={3} className='social item'>
            <LinkContainer to={`/`}>
              <i className='fas fa-facebook'></i>
            </LinkContainer>
            <LinkContainer to={`/`}>
              <i className='fas fa-twitter'></i>
            </LinkContainer>
            <LinkContainer to={`/`}>
              <i className='fas fa-instagram'></i>
            </LinkContainer>
          </Col>
          <Col sm={6} md={3} className='copyright'>
            Copyright &copy; SARK Entreprises 2020 - {getYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
