import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToPreorder, removeFromPreorder } from '../actions/preorderActions'
import { createPreorder } from '../actions/preorderActions'
// import { listProductDetails } from '../actions/productActions'

const PreorderScreen = () => {
  let { id } = useParams()

  const dispatch = useDispatch()

  const preorder = useSelector((state) => state.preorder)
  const { preorderItems } = preorder

  // const productDetails = useSelector((state) => state.productDetails)
  // const { product } = productDetails

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  //calculate prices
  preorder.itemsPrice = addDecimals(
    preorder.preorderItems.reduce((acc, item) => acc + item.price, 0)
  )
  console.log(preorder.preorderItems, preorder.itemsPrice, id)

  useEffect(() => {
    if (id) {
      dispatch(addToPreorder(id))
    }
  }, [dispatch, id])

  const removeFromPreorderHandler = (id) => {
    dispatch(removeFromPreorder(id))
  }

  const preorderProductHandler = () => {
    if (window.confirm('Are you sure')) {
      dispatch(
        createPreorder({
          preorderItems: preorder.preorderItems,
          preorderItemsPrice: preorder.itemsPrice,
        })
      )
    }

    // console.log(preorderItems)
  }

  return (
    <Row>
      <Col md={8}>
        <h1>My Preorders</h1>
        {preorderItems.length === 0 ? (
          <Message>
            There are no preorders. <Link to='/'>Go Home</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {preorderItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={6}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      className='rounded'
                      onClick={() => removeFromPreorderHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>PREOrder Summary</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>$ {preorder.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Total</Col>
                <Col>$ {preorder.itemsPrice}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {/* {error && <Message variant='danger'>{error}</Message>} */}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block rounded'
                onClick={() => preorderProductHandler()}
              >
                Pre-Order
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default PreorderScreen
