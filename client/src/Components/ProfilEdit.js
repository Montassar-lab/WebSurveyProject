import { useEffect, useState } from "react"
import {Button} from 'react-bootstrap'
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
      <section>
      <div className="form-box">
          <div className="form-value">

        <form action="">

        <h2>Profil Edit</h2> 
         <div className="inputbox">
                        <input defaultValue={name} onChange={(e)=> setName(e.target.value)} type="email" required/>
                        <label for="">Name</label>
                    </div>

                    <div className="inputbox">
                        <input defaultValue={cin} onChange={(e)=> setcin(e.target.value)} type="cin" required/>
                        <label for="">CIN</label>
                    </div>

                    <div className="inputbox">
                        <input defaultValue={email} onChange={(e)=> setEmail(e.target.value)} type="Email" required/>
                        <label for="">Email</label>
                    </div> 

                    <button onClick={(e)=>handleEdit(e)}>Submit</button>
  
       
        {/* <Button onClick={(e)=>handleEdit(e)} variant="primary" type="submit">
          Submit
        </Button> */}
        </form>
       </div> 
       </div>
    </section>
    )
}

export default ProfilEdit