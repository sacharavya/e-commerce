import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  function getYear() {
    return new Date().getFullYear()
  }
  return (
    <footer>
<<<<<<< HEAD
        <Row>
          <Col className='text-center py-3'>
            <Row>
                <Col>This is official website of SARK Enterprises, which is involed in sales of CCTV and networking devices since last few years.</Col>
            </Row>
          </Col>
          <Col className='text-center py-3'>
            <Row>
              <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Contact Us</li>
              </ul>
            </Row>
          </Col>
          <Col className='text-center py-3'>
            <Row>
              Follow Us on:
                <ul className=''>
                  <li>
                    <i className='fab fa-facebook-f'></i>
                  </li>
                  <li>
                  <i className='fab fa-instagram'></i>
                  </li>
                  <li>
                  <i className='fab fa-twitter'></i>
                  </li>
                </ul>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Saurav 2020 - {getYear()}
          </Col>
        </Row>
=======
      <Row>
        <Col className='text-center py-3'>
          Copyright &copy; Saurav 2020 - {getYear()}
        </Col>
      </Row>
>>>>>>> 919c867fb4c429ad737bf139e77b61f252f002cb
    </footer>
  )
}

export default Footer
