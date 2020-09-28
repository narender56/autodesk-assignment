import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

const SignIn = lazy(() => import('../views/SignIn'))
const Home = lazy(() => import('../views/Home'))

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={SignIn}/>
    </Switch>
  </Suspense>
)

export default Routes
