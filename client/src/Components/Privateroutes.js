import { Navigate } from "react-router-dom"

const Privateroutes=({children})=>{
    const token = localStorage.getItem("token")
    return(
        <div>
            {
                token ? children : <Navigate to='/'/>
            }
        </div>
    )
}

export default Privateroutes