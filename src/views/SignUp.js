import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Components
import Input from '../components/common/Input'
import Button from '../components/common/Button'

// Utilities
import { validateUser } from '../utils/user'
import toast from '../utils/toast'

const SignUp = () => {
  document.title = 'Sing up'
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    confirmUsername: '',
    password: '',
    confirmPassword: ''
  })

  const [form, setErrorForm] = useState({
    valid: false
  })

  useEffect(() => {
    if (form.valid) {
      toast('Account created sucessfully')
    }
  }, [form])

  const handleUserDetails = ({ name, value}) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleCreate = () => {
    setErrorForm(validateUser(user))
  }

  return (
    <div className="w100p flex justify-center">
      <div className="flex-column justify-center mt48 w24p-dk pa16-mb">
      <span className="f22 lh28">Create Account</span>
        <div className="mt24 flex justify-between">
          <Input
            name="firstName"
            inputClasses={`h38 br4 w96p-tb w96p-mb mr16 ${form.firstName ? 'border-red' : ''}`}
            value={user.firstName}
            error={form.firstName}
            errorClass={form.firstName ? 'mb48' : ''}
            placeholder="First name"
            handleChange={handleUserDetails}
          />
          <Input
            name="lastName"
            inputClasses={`h38 br4 w96p-tb w96p-mb ${form.lastName ? 'border-red' : ''}`}
            value={user.lastName}
            error={form.lastName}
            errorClass={form.firstName ? 'mb48' : ''}
            placeholder="Last name"
            handleChange={handleUserDetails}
          />
        </div>
        <Input
          name="username"
          classes="mt16 br4"
          inputClasses={`h38 br4 w100p ${form.username ? 'border-red' : ''}`}
          value={user.username}
          error={form.username}
          placeholder="Username"
          handleChange={handleUserDetails}
          />
        <Input
          classes="mt16"
          name="confirmUsername"
          inputClasses={`h38 br4 w100p ${form.confirmUsername ? 'border-red' : ''}`}
          value={user.confirmUsername}
          error={form.confirmUsername}
          placeholder="Re-type username"
          handleChange={handleUserDetails}
          />
        <Input
          name="password"
          classes="mt16"
          type="password"
          inputClasses={`h38 br4 w100p ${form.password ? 'border-red' : ''}`}
          value={user.password}
          error={form.password}
          placeholder="Password"
          handleChange={handleUserDetails}
          />
        <Input
          name="confirmPassword"
          classes="mt16"
          inputClasses={`h38 br4 w100p ${form.confirmPassword ? 'border-red' : ''}`}
          value={user.confirmPassword}
          error={form.confirmPassword}
          placeholder="Re-type password"
          handleChange={handleUserDetails}
          />
        <Button
          classes="bg-blue border-all outline-none br4 h38 mv12 f16 lh22 text-white"
          label="Create Account"
          onClick={handleCreate}
        />
        <div className="text-center text-light-grey f14 lh20">
          Already have an account? <NavLink className="text-light-blue text-decoration-none hover-underline" to="/login">Sign in</NavLink>
        </div>
      </div>
    </div>
  )
}

export default SignUp
