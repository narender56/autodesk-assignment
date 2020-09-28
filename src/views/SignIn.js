import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

// Utils
import toast from '../utils/toast'

const SignIn = () => {
  document.title = 'Sing in'
  const history = useHistory()
  const [user, setUser] = useState({
    mobile: '',
    otp: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [otpView, setOTPView] = useState(false)

  const handleUserInput = ({ name, value }) => {
    setUser({
      ...user,
      [name]: value
    })
  }

  const toggleView = () => {
    setError('')
    setOTPView(!otpView)
  }

  const handleNext = () => {
    if (!user.mobile) {
      setError('Please enter your mobile number')
      return
    }
    setLoading(true)

    // Make API Call here
    setTimeout(() => {
      if (user.username === 'nosuchusername') {
        setError('Enter valid mobile number')
      } else {
        toggleView()
      }
      setLoading(false)
    }, 1000)
  }

  const signIn = () => {
    if (!user.otp) {
      setError('Please enter your otp')
      return
    }
    setError('')
    toast('Tada, Login success.. 🎉')
    history.push('/', { success: true })
  }

  return (
    <div className="w100p flex justify-center">
      <div className="flex-column justify-center mt48 w100p w25p-dk pa16">
        <div className={`w100p animate h0 ${!otpView ? 'opacity1' : 'opacity0 move-left'}`}>
          <span className="f22 lh28">Sign in</span>
          <Input
            name="mobile"
            classes="mt24"
            inputClasses={`h38 br4 w100p outline-none ${error ? 'border-red' : ''}`}
            value={user.mobile}
            error={error}
            placeholder="Mobile"
            handleChange={handleUserInput}
          />
          <Button
            classes="w100p bg-blue border-all outline-none br4 h40 mv12 f16 lh22 text-white pointer"
            label={ loading ? "Verifying..." : "Next" }
            onClick={handleNext}
          />
          {/* <div className="text-center text-light-grey f14 lh20">
            New to Autodesk? <NavLink className="text-light-blue text-decoration-none hover-underline" to="/register">Create Account</NavLink>
          </div> */}
        </div>
        <div className={`w100p animate h0 z-1 ${!otpView ? 'opacity0' : 'opacity1 move-right z1'}`}>
          <div className="text-center">
            <span className="f22 lh28 text-blue bold fleft pointer" onClick={toggleView}>&lt;</span>
            <span className="flex-column text-center">
              <span className="f22 lh28 text-black">Welcome</span>
              <span className="f14 lh20 text-light-grey">{ user.mobile }</span>
            </span>
          </div>
          <Input
            name="otp"
            classes="mt24"
            inputClasses={`h38 br4 w100p outline-none${error ? ' border-red' : ''}`}
            value={user.otp}
            error={error}
            placeholder="Enter OTP"
            handleChange={handleUserInput}
          />
          <Button
            classes="w100p bg-blue border-all outline-none br4 h40 mv12 f16 lh22 text-white pointer"
            label="Sing In"
            onClick={signIn}
          />
        </div>
      </div>
    </div>
  )
}

export default SignIn
