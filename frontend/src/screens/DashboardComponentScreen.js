import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'
// import { listMyOrders, listOrders } from '../actions/orderActions'
// import { listProducts } from '../actions/productActions'
// import { listUsers } from '../actions/userActions'

const DashboardComponentScreen = (history) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productList = useSelector((state) => state.productList)
  const { products } = productList

  const userList = useSelector((state) => state.userList)
  const { users } = userList

  const orderList = useSelector((state) => state.orderList)
  const { orders } = orderList

  const orderListMy = useSelector((state) => state.orderListMy)
  const { orders: myorders } = orderListMy

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.pushState('/login')
  //   } else {
  //     if (products && orders && users && myorders) {
  //       dispatch(listProducts)
  //       dispatch(listOrders)
  //       dispatch(listUsers)
  //       dispatch(listMyOrders)
  //     }
  //   }
  // }, [history, userInfo, products, users, orders, myorders])

  const lenProduct = products.length
  const lenUser = users.length
  const lenOrder = orders.length
  const lenMyOrder = myorders.length

  return (
    <>
      <div>
        {userInfo && userInfo.isAdmin && (
          <Row>
            <Col>
              <Card style={{ width: '35%' }}>
                <Card.Body>
                  <Card.Title>Products</Card.Title>
                </Card.Body>
                <Card.Text as='h3' className='py-2' style={{ size: '20px' }}>
                  <strong>{lenProduct}</strong>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '35%' }}>
                <Card.Body>
                  <Card.Title>Order</Card.Title>
                </Card.Body>
                <Card.Text as='h3' className='py-2' style={{ size: '20px' }}>
                  <strong>{lenOrder}</strong>
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '35%' }}>
                <Card.Body>
                  <Card.Title>User</Card.Title>
                </Card.Body>
                <Card.Text as='h3' className='py-2' style={{ size: '20px' }}>
                  <strong>{lenUser}</strong>
                </Card.Text>
              </Card>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Card style={{ width: '35%' }}>
              <Card.Body>
                <Card.Title>My order</Card.Title>
              </Card.Body>
              <Card.Text as='h3' className='py-2' style={{ size: '20px' }}>
                <strong>{lenMyOrder}</strong>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '35%' }}>
              <Card.Body>
                <Card.Title>My order</Card.Title>
              </Card.Body>
              <Card.Text as='h3' className='py-2' style={{ size: '20px' }}>
                <strong>{lenMyOrder}</strong>
              </Card.Text>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '35%' }}>
              <Card.Body>
                <Card.Title>My order</Card.Title>
              </Card.Body>
              <Card.Text as='h3' className='py-2' style={{ size: '20px' }}>
                <strong>{lenMyOrder}</strong>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default DashboardComponentScreen
