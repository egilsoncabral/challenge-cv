import  React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ props => {
        if(sessionStorage.getItem("token") != null) {
          return <Component {...props} {...rest}/>
        } else {
          return (
            <Redirect to={{pathname: "/", state: {from: props.location}}}
          />)
        }
      }}
    />
  );
}
