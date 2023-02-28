import { useState } from "react"
import {Form,Button} from "react-bootstrap"
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { register } from "../Redux/Actions/AuthActions"
const Register=()=>{

    const [name,setName] = useState('')
    const [cin,setcin] = useState('')
    const [matriculefiscale,setmatriculefiscale] = useState('')
    const [age,setage] = useState('')
    const [adress,setadress] = useState('')
    const [nationality,setnationality] = useState('')
    const [highesteducationlevel,sethighesteducationlevel] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister=(a)=>{
      a.preventDefault()
      dispatch(register({name,cin,matriculefiscale,age,adress,nationality,highesteducationlevel,email,password},navigate))
    }
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>CIN</Form.Label>
          <Form.Control onChange={(e)=> setcin(e.target.value)} type="text" placeholder="Enter CIN" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>matriculefiscale</Form.Label>
          <Form.Control onChange={(e)=> setmatriculefiscale(e.target.value)} type="text" placeholder="Enter matriculefiscale" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>age</Form.Label>
          <Form.Control onChange={(e)=> setage(e.target.value)} type="text" placeholder="Enter age" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>adress</Form.Label>
          <Form.Control onChange={(e)=> setadress(e.target.value)} type="text" placeholder="Enter your Adress" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nationality</Form.Label>
          <Form.Control onChange={(e)=> setnationality(e.target.value)} type="text" placeholder="Enter nationality" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>highest education level</Form.Label>
          <Form.Control onChange={(e)=> sethighesteducationlevel(e.target.value)} type="text" placeholder="Enter your highest education level" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" />        
        </Form.Group>
  
       
        <Button onClick={(e)=> handleRegister(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default Register