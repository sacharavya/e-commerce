import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import { withRouter } from 'react-router'
import './../index.css'

import { logout } from '../actions/userActions'

const Side = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <>
      <Nav bg='dark' variant='dark' className='sidebar-nav'>
        <Nav.Item>
          <LinkContainer to='/dashboard'>
            <Nav.Link>
              <i className='fas fa-th'></i> Dashboard
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/dashboard/profile'>
            <Nav.Link>
              <i className='fas fa-user'></i> Profile
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        {userInfo && userInfo.isAdmin && (
          <>
            <Nav.Item>
              <LinkContainer to='/dashboard/admin/userlist'>
                <Nav.Link>
                  <i className='fas fa-users'></i> Users
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to='/dashboard/admin/productlist'>
                <Nav.Link>
                  <i className='fas fa-shopping-bag'></i> Products
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to='/dashboard/admin/orderlist'>
                <Nav.Link>
                  <i className='fas fa-truck'></i> Orders
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </>
        )}
        <Nav.Item>
          <LinkContainer to='/dashboard/preorder?'>
            <Nav.Link>
              <i className='fas fa-shopping-bag'></i> Preorder
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/dashboard/myorder'>
            <Nav.Link>
              <i className='fas fa-truck'></i>My Orders
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/dashboard/cart'>
            <Nav.Link>
              <i className='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to='/login'>
            <Nav.Link onClick={logoutHandler}>
              <i className='fas fa-shopping-bag'></i>Log out
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  )
}
const Sidebar = withRouter(Side)
export default Sidebar
