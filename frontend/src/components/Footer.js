import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  function getYear() {
    return new Date().getFullYear()
  }
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Saurav 2020 - {getYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
