import { Navigate } from "react-router-dom"
import { accountService } from "../_services/account_services"
const AuthVerify = ({children}) => {
  
  if(!accountService.isLogged()){
    return <Navigate to="/auth/login" />
  }

  return children

}

export default AuthVerify