import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import OrderListScreen from './screens/OrderListScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import DashboardScreen from './screens/DashboardScreen'
import PreorderScreen from './screens/PreorderScreen'
// import Sidebar from './components/Sidebar'
// import DashboardComponentScreen from './screens/DashboardComponentScreen'
// import MyOrderScreen from './screens/MyOrderScreen'
import CategoryListScreen from './screens/CategoryListScreen'

const App = () => {
  // console.log(window.location.pathname) //yields: "/js" (where snippets run)
  // console.log(window.location.href) //yields: "https://stacksnippets.net/js"

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Route path='/dashboard' component={DashboardScreen} exact></Route>
        <Container>
          <Route path='/category' component={CategoryListScreen} exact />
          <Route path='/shipping' component={ShippingScreen} exact />
          <Route path='/payment' component={PaymentScreen} exact />
          <Route path='/placeorder' component={PlaceOrderScreen} exact />
          <Route path='/dashboard/order/:id' component={OrderScreen} exact />
          <Route
            path='/dashboard/admin/orderlist'
            component={OrderListScreen}
            exact
          />
          <Route
            path='/dashboard/preorder/:id'
            component={PreorderScreen}
            exact
          />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/dashboard/profile' component={ProfileScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />
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
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
