import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current, deleteCurrentUser } from "../Redux/Actions/AuthActions"
import { Link, useNavigate } from "react-router-dom"


const Profil=()=>{



    const user = useSelector(state=>state.AuthReducer.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(current())
    },[dispatch])
    return(
        <section>
        <div className="form-box">
            <div className="form-value">
  
          <div >
          <h2>Your Profil</h2>  
            {
                user &&
                <>
                    
                            <div className="inputbox">{user.name}</div>
                            <div className="inputbox">{user.cin}</div>
                            <div className="inputbox"> {user.email}</div>
                            <div className="inputbox"> {user.role}</div>
                          
                            <div className="register">
                               
                          
                            <button> <Link style={{color : "black",textDecoration:'none'}} to={`/editProfil/${user._id}`}>Edit</Link></button>
                            <button onClick={()=>dispatch(deleteCurrentUser(user._id,navigate))}>Delete</button>
                            
                            </div>
                  


                </>
            }
         </div>
       </div> 
       </div>
    </section>
    )
}

export default Profil