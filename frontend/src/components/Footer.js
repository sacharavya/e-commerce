import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  function getYear() {
    return new Date().getFullYear()
  }
  return (
    <footer>
      <Row>
        <Col className='text-center py-3'>
          Copyright &copy; Saurav 2020 - {getYear()}
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
