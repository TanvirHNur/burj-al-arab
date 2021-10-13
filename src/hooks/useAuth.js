import { useContext } from "react"
import { AuthContext } from "../context/AuthProvder"

const useAuth=()=>{
    return useContext(AuthContext)
}

export default useAuth;