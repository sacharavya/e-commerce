import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, childern }) => {
  return <Alert variant={variant}>{childern}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
