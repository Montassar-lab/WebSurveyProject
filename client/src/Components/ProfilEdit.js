import { useEffect, useState } from "react"
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateProfil } from "../Redux/Actions/AuthActions"


const ProfilEdit=()=>{

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[dispatch,id])

    const oneUser = useSelector(state=>state.AuthReducer.oneUser)

    const [name,setName] = useState(oneUser.name)
    const [cin,setcin] = useState(oneUser.cin)
    const [matriculefiscale,setmatriculefiscale] = useState(oneUser.matriculefiscale)
    const [age,setAge] = useState(oneUser.age)
    const [adress,setadress] = useState(oneUser.adress)
    const [nationality,setnationality] = useState(oneUser.nationality)
    const [highesteducationlevel,sethighesteducationlevel] = useState(oneUser.highesteducationlevel)
    const [email,setEmail] = useState(oneUser.email)

    useEffect(()=>{
        setName(oneUser.name)
        setcin(oneUser.cin)
        setmatriculefiscale(oneUser.matriculefiscale)
        setAge(oneUser.age)
        setadress(oneUser.adress)
        setnationality(oneUser.nationality)
        sethighesteducationlevel(oneUser.highesteducationlevel)
        setEmail(oneUser.email)
    },[oneUser])
    
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateProfil({name,cin,matriculefiscale,age,adress,nationality,highesteducationlevel,email},id,navigate))
    }
    return(
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>cin</Form.Label>
          <Form.Control value={cin} onChange={(e)=> setcin(e.target.value)} type="text" placeholder="Enter cin" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>matriculefiscale</Form.Label>
          <Form.Control value={matriculefiscale} onChange={(e)=> setmatriculefiscale(e.target.value)} type="text" placeholder="Enter matriculefiscale" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control value={age} onChange={(e)=> setAge(e.target.value)} type="number" placeholder="Enter age" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>adress</Form.Label>
          <Form.Control value={adress} onChange={(e)=> setadress(e.target.value)} type="text" placeholder="Enter adress" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>nationality</Form.Label>
          <Form.Control value={nationality} onChange={(e)=> setnationality(e.target.value)} type="text" placeholder="Enter nationality" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>highesteducationlevel</Form.Label>
          <Form.Control value={highesteducationlevel} onChange={(e)=> sethighesteducationlevel(e.target.value)} type="text" placeholder="Enter highesteducationlevel" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />       
        </Form.Group>
  
       
        <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

export default ProfilEdit