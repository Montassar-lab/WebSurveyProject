import { useState } from "react"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { login } from "../Redux/Actions/AuthActions"

const Login=()=>{

    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=(a)=>{
        a.preventDefault()
        dispatch(login({email,password},navigate))
    }

    return(

     
      <section>
      <div className="form-box">
          <div className="form-value">

        <form action="">

        <h2>Login</h2>        

                    <div className="inputbox">
                        
                        <input onChange={(e)=> setEmail(e.target.value)} type="email" required/>
                        <label for="">Email</label>
                    </div>

                    <div className="inputbox">
                       
                        <input onChange={(e)=> setPassword(e.target.value)} type="password" required/>
                        <label for="">Password</label>
                    </div>
         
                    <button onClick={(e)=>handleLogin(e)}>Log in</button>
                    
                    <div className="register">
                        <p>Don't have a account <a href="/register">Register</a></p>
                    </div>

         </form>
       </div> 
       </div>
    </section>
    )
}

export default Login