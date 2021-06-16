import React, { useContext } from "react";
import UserContext  from "hooks/userContext";
import { Redirect, Route } from "react-router-dom";
//assuming you have a component to for loading state, here is where you use it

export const AuthRoute = ({ component: Comp, path, routeTo, rest }) => {
  const { user } = useContext(UserContext);

  // if (isLoading){
  //     return </Loading Component>
  // }

  //if the user has been set at the top(App.js) or by the reg page or the login page
  //then allow user in(they are authenthicated) else,redirect them to login page?Home

  if (user) {
    console.log("Has user context")
    return (
      <Route
        path={path}
        render={() => {
          return <Comp setAccess={rest} />;
        }}
      />
    );
  }else{
    console.log(user)
    console.log("User is not auth")
    return <Redirect to={routeTo} />;
  }
};

