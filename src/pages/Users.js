import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'

import { isLoggedIn, logOut } from '../services/auth'
import Button from '../components/Button'

const API_URL =
  'https://raw.githubusercontent.com/Pompette/technical_test/master/users.json'

const Users = () => {
  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const resultJson = await fetch(API_URL)
      const { users } = await resultJson.json()
      setUsers(users)
    }

    fetchData()
  }, [])

  const handleLogOut = () => {
    history.push('/login')
    logOut()
  }

  if (!isLoggedIn()) {
    return <Redirect to="/login" />
  }

  return (
    <div className="users-container">
      <header>
        <Button onClick={handleLogOut}>Logout</Button>
      </header>
      <table className="users-table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td className="text-right">Dev</td>
            <td>Company</td>
            <td>Years</td>
            <td>Features</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td className="text-right">{user.dev}</td>
              <td>{user.company}</td>
              <td>{user.years}</td>
              <td>{user.features.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users
