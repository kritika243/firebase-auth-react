import React, { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser } = useAuth()

  function handleLogout() {}
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Your Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email: </strong> {currentUser.email}
          <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>
            Update your profile
          </Link>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2 '>
        <Button variant='link' onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}

export default Dashboard
