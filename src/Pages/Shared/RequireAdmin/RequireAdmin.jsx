import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../Loading/Loading";
import useAdmin from "../../Shared/RequireAdmin/RequireAdmin";
import { signOut } from "firebase/auth";

const RequireAdmin = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  // showing the
  if (loading || adminLoading) {
    return <Loading />;
  }

  // if user or admin access doesn't have then it'll signOut automatically. then take us login page
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
