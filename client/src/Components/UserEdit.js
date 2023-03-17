import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneUser, updateUser } from "../Redux/Actions/AuthActions"


const UserEdit=()=>{

    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneUser(id))
    },[dispatch,id])

    const oneUser = useSelector(state=>state.AuthReducer.oneUser)

    const [name,setName] = useState(oneUser.name)
    const [cin,setcin] = useState(oneUser.cin)
    const [email,setEmail] = useState(oneUser.email)

    useEffect(()=>{
        setName(oneUser.name)
        setcin(oneUser.cin)
        setEmail(oneUser.email)
    },[oneUser])
    
    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateUser({name,cin,email},id,navigate))
    }
    return(
      
      <div>


        <h2>Edit</h2>

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
       


       </div> 

    )
}

export default UserEdit