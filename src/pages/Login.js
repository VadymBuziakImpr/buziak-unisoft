import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../components/Input'
import Button from '../components/Button'
import { ReactComponent as InfoIcon } from './../assets/svg/icon-information.svg'
import { handleLogin } from '../services/auth'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [wrongCredentials, setWrongCredentials] = useState(false)
  const history = useHistory()

  const handleDataChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleNavigate = () => history.push('/home/users')

  const handleSubmit = (e) => {
    e.preventDefault()
    return handleLogin(data, setWrongCredentials, handleNavigate)
  }

  return (
    <div className="login-container">
      <div className="content-wrapper">
        <h2 className="page-title">Connectez vous à MyUnisoft</h2>
        <form onSubmit={handleSubmit}>
          <Input
            required
            placeholder="Adresse email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleDataChange}
          />
          <Input
            required
            placeholder="Mot de passe"
            type="password"
            name="password"
            value={data.password}
            onChange={handleDataChange}
          />
          <div className="info-wrap">
            {wrongCredentials && (
              <div className="bad-credentials">
                <InfoIcon />
                <span>Bad credentials</span>
              </div>
            )}
            <div className="forgot-password">Mot de passe oublié ?</div>
          </div>
          <Button type="submit">Se connecter</Button>
        </form>
      </div>
    </div>
  )
}

export default Login
