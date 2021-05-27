import React from "react";
import {Redirect, Route} from "react-router-dom";


const ProtectedRoute = ({component: Comp,path,allow,routeTo,rest})=>{
    return(
    <Route
    path={path}
    render={()=>{
        return allow ? <Comp setAccess = {rest}/>:<Redirect to={routeTo}/>
    }}
    />


    )
}

export default ProtectedRoute