import React,{useEffect, useState} from "react";
import DarkFooter from "components/footers/DarkFooter.js"
import {Nav} from "components/navbar/Navbar.js"
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import HomePage from "pages/Home.js"
import SignUp from "components/signup/Signup.js"
import SignIn from "components/signin/Signin"
import {ResetPassword} from "components/reset_password/ResetPassword"
import { ResetPage } from "components/reset_password/ResetPage"
import ResetSuccesss from "components/reset_password/ResetSuccess"
import ProtectedRoute from "components/protected/ProtectedRoute"
import ResetRequestSuccess from "components/reset_password/ResetRequestSuccessful"
import {DashboardBase} from "components/dashboard/UserDashboard"
import AOS from "aos";
import "aos/dist/aos.css"


function App() {
  useEffect(()=>{
    AOS.init()
    AOS.refresh()

  },[])

  const [loggedIn, setLogin] = useState(false)
  const [resetAccess, setResetAccess] = useState(false)

  return (
    <div className="App">
    <Router>
      <Nav />
      <Switch>
        <Route
          path="/signup"
          component={SignUp}
        />
        <ProtectedRoute
          path="/reset-page"
          allow={true}
          rest={setResetAccess}
          component={ResetPage}
          routeTo = "/signin"

        />
        <Route
          path="/dashboard"
          component={DashboardBase}
        />
        <Route
          path="/signin"
          setSignIn = {setLogin}
          render = {()=>{
            return <SignIn setSignIn = {setLogin}/>
          }}
        />

        <Route
          path="/reset-password"
          render = {()=>{
            return <ResetPassword setAccess={setResetAccess} />
          }}
        />

        <ProtectedRoute
          path="/reset-request-success"
          allow = {resetAccess}
          component = {ResetRequestSuccess}
          routeTo = "/signin"
        />
        <ProtectedRoute
          path="/reset-success"
          allow = {resetAccess}
          component={ResetSuccesss}
          routeTo="/signin"
        />
        <Route path="/" component={HomePage}/>
  
      </Switch>
      <DarkFooter />
    </Router>
    </div>
  );
}

export default App;
