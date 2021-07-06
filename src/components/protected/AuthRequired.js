import React, { useContext } from "react";
import UserContext from "hooks/userContext";
import { Redirect, Route } from "react-router-dom";
import ContentLoader from "react-content-loader";

export const Loading = (props) => (
  <ContentLoader
    viewBox="0 0 500 300"
    height={"50vw"}
    width={"100%"}
    {...props}
  >
    <rect x="0" y="8" rx="0" ry="0" width="40" height="18" />
    <circle cx="492" cy="16" r="8" />
    <circle cx="472" cy="16" r="8" />
    <rect x="362" y="8" rx="7" ry="7" width="96" height="16" />

    <rect x="0" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="50" y="39" rx="0" ry="0" width="36" height="8" />
    <rect x="102" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="152" y="39" rx="0" ry="0" width="34" height="8" />
    <rect x="202" y="39" rx="0" ry="0" width="36" height="8" />
    <rect x="254" y="39" rx="0" ry="0" width="34" height="8" />

    <rect x="477" y="39" rx="0" ry="0" width="10" height="8" />

    <rect x="19" y="64" rx="0" ry="0" width="465" height="155" />

    <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
  </ContentLoader>
);

//assuming you have a component to for loading state, here is where you use it

export const AuthRoute = ({ component: Comp, path, routeTo }) => {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Loading />;
  }

  //if the user has been set at the top(App.js) or by the reg page or the login page
  //then allow user in(they are authenthicated) else,redirect them to login page?Home

  if (user) {
    return (
      <Route
        path={path}
        render={() => {
          return <Comp />;
        }}
      />
    );
  } else {
    return <Redirect to={routeTo} />;
  }
};
