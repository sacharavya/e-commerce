import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table, Button, Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { LinkContainer } from 'react-router-bootstrap'
import { listCategory } from '../actions/categoryActions'

const CategoryListScreen = () => {
  const dispatch = useDispatch()

  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, category } = categoryList

  console.log(category)

  // useEffect(() => {
  //   if (category) {
  //     dispatch(listCategory)
  //   }
  // })[(dispatch, category)]

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h2>Category List</h2>
        </Col>
        <Col className='text-right'>
          <Button className='my-3'>
            <i className='fas fa-plus'> </i> Create Category
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {categories.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category._Name}</td>
                  <td>
                    <LinkContainer>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default CategoryListScreen
