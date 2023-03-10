import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import  Auth from './authGuard'
/* eslint react/prop-types: 0 */

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {isLoggedIn} =useSelector((state) => state.loginReducer)

    return (
        <Route {...rest} render={
            (props) => {
                if (isLoggedIn) {
console.log('Yes')
                    return <Component {...props} render={rest.render} />
                } else {
console.log('No')

                    return <Redirect to=
                        {{
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }}

                    />
                }
            }
        }
        />
    )
}