import { useState } from "react"
import {Form,Button} from "react-bootstrap"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { register } from "../Redux/Actions/AuthActions"
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
const Register=()=>{

    const [name,setName] = useState('')
    const [cin,setcin] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


  
    const [role, setRole] = useState('user');
  
    const radios = [
      { name: 'User', value: 'user' },
      { name: 'Professional', value: 'professional' }
    ];





    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister=(a)=>{
      a.preventDefault()
      dispatch(register({name,cin,email,password,role},navigate))
    }
    return(
      
   
      
      <section>
      <div className="form-box">
          <div className="form-value">

        <form action="">

        <h2>Register</h2> 
          
          <ButtonGroup>
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={role === radio.value}
                        onChange={(e) => setRole(e.currentTarget.value)}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>

                  <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input onChange={(e)=> setName(e.target.value)} type="Name" required/>
                        <label for="">Name</label>
                  </div>
                  <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input onChange={(e)=> setcin(e.target.value)} type="CIN" required/>
                        <label for="">CIN</label>
                  </div>
        <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input onChange={(e)=> setEmail(e.target.value)} type="Email" required/>
                        <label for="">Email</label>
                  </div>



        <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input onChange={(e)=> setPassword(e.target.value)} type="Password" required/>
                        <label for="">Password</label>
                  </div>
  
                  <button onClick={(e)=> handleRegister(e)}>Sign Up</button>     
    
                  </form>
       </div> 
       </div>
    </section>
       
     
      
    )
}

export default Register