import React from "react";

import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContexts";


function PrivateRoute({ children }) {//this is simple function for private route 
  //it takes the currentuser from Authcontext file 
  const { currentUser } = useAuth();
//it checks that if the  user is not the current user then   it will navigated to the login page 
//otherwise user is the currentuser ,it will allow to access the children data or dashboard 
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
//it simply allow to access the dashboard page 
  return children;
}

export default PrivateRoute;
