import { memo, useState } from "react"
import { Navigate } from "react-router-dom"

type privateType = {
  children: JSX.Element
}

const PrivateRoute = ( {children}: privateType)  => {
  const [user, setUser] = useState<any>("")
   
  const auth = user;

  return auth === "" ? children : <Navigate to={"/"} />;

  
  
}

export default memo (PrivateRoute)