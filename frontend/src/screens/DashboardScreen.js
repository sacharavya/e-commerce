import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
// import { useSelector } from 'react-redux'
// import { logout } from '../actions/userActions'
import { Container } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import './../index.css'

import UserEditScreen from './UserEditScreen'
import UserListScreen from './UserListScreen'
import ProductListScreen from './ProductListScreen'
import ProductEditScreen from './ProductEditScreen'
import OrderListScreen from './OrderListScreen'
import CartScreen from './CartScreen'
import PreorderScreen from './PreorderScreen'
import ProfileScreen from './ProfileScreen'
import DashboardComponentScreen from './DashboardComponentScreen'
import MyOrderScreen from './MyOrderScreen'
import LoginScreen from './LoginScreen'

const DashboardScreen = () => {
  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  return (
    <Router>
      <>
        <Row>
          <Col xs={2} id='sidebar-wrapper'>
            <Sidebar />
          </Col>
          <Col xs={10} id='page-content-wrapper'>
            <Container>
              <Route path='/login' component={LoginScreen} exact />
              <Route
                path='/dashboard'
                component={DashboardComponentScreen}
                exact
              />
              <Route
                path='/dashboard/admin/userlist'
                component={UserListScreen}
                exact
              />

              <Route
                path='/dashboard/admin/user/:id/edit'
                component={UserEditScreen}
                exact
              />
              <Route
                path='/dashboard/admin/productlist'
                component={ProductListScreen}
                exact
              />
              <Route
                path='/dashboard/admin/productlist/:pageNumber'
                component={ProductListScreen}
                exact
              />
              <Route
                path='/dashboard/admin/product/:id/edit'
                component={ProductEditScreen}
                exact
              />
              <Route
                path='/dashboard/admin/orderlist'
                component={OrderListScreen}
                exact
              />
              <Route
                path='/dashboard/preorder/:id?'
                component={PreorderScreen}
                exact
              />
              <Route path='/dashboard/cart/:id?' component={CartScreen} exact />
              <Route
                path='/dashboard/profile'
                component={ProfileScreen}
                exact
              />
              <Route
                path='/dashboard/myorder'
                component={MyOrderScreen}
                exact
              />
            </Container>
          </Col>
        </Row>
      </>
    </Router>
  )
}

export default DashboardScreen
