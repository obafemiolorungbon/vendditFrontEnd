import React,{useEffect, useState} from "react";
import DarkFooter from "components/footers/DarkFooter.js"
import {Nav} from "components/navbar/Navbar.js"
import { BrowserRouter as Router,Route, Switch } from "react-router-dom"
import HomePage from "pages/Home.js"
import SignUp from "components/signup/Signup.js"
import SignIn from "components/signin/Signin"
import { ResetPassword } from "components/reset_password/ResetPassword"
import { ResetPage } from "components/reset_password/ResetPage"
import ResetSuccesss from "components/reset_password/ResetSuccess"
import { ProtectedRoute } from "components/protected/ProtectedRoute";
import { AuthRoute } from "components/protected/AuthRequired";
import UserContext  from "hooks/userContext"
import ResetRequestSuccess from "components/reset_password/ResetRequestSuccessful"
import { DashboardBase } from "components/dashboard/UserDashboard"
import { useVisitChecker } from "hooks/onVisitChecker";
import AOS from "aos";
import "aos/dist/aos.css"


function App() {
  //extract this hook
  useEffect(()=>{
    AOS.init()
    AOS.refresh()

  },[])
  //immediately the user gets to the sight, run the onvisit hook to get their data
  //this allows you to set the global context in App.js. the onvisit hook returns a
  //state function too that will be passed down to any variable that needs it e.g reg and login page

  const { setUser, user, isLoading } = useVisitChecker()
  //this allows access to the request received page only after sending request
  const [resetSuccess, setResetSuccess] = useState(false);
  console.log(user)

  return (
    <div className="App">
      <Router>
      {/* using the user context we created earlier, we can pass down, the current user,
      the function to set that, e.g in reg and login as well as the isLoading which will
      come handy for loading the homepage component */}
      <UserContext.Provider value = {{setUser, user, isLoading}}>
        <Nav />
        <Switch>
          <Route path="/signup" component={SignUp} />

          <Route
            path="/reset-page"
            component={ResetPage}
          />
          <Route
            path="/signin"
            component = {SignIn}
          />
          
          <AuthRoute
            component = {DashboardBase}
            routeTo = "/signin"
            path = "/dashboard"
          />

          <Route
            path="/reset-password"
            setAccess={setResetSuccess}
            render={() => {
              return <ResetPassword setAccess={setResetSuccess} />;
            }}
          />

          <ProtectedRoute
            path="/reset-request-success"
            allow={resetSuccess}
            component={ResetRequestSuccess}
            routeTo="/signin"
          />
          <ProtectedRoute
            path="/reset-success"
            allow={resetSuccess}
            component={ResetSuccesss}
            routeTo="/signin"
          />
          <Route path="/" component={HomePage} />
        </Switch>
        <DarkFooter />
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
