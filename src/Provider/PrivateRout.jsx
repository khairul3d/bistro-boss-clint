import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if(loading){
        return <span className="loading loading-spinner text-secondary text-center"></span>
     }
    if(user){
        return children;
    }
     return <Navigate state={location.pathname} to="/login" replace></Navigate>

};

export default PrivateRout;