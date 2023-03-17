import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "../Redux/Actions/AuthActions"
import UserCard from "./UserCard"

const Users=()=>{

    const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(getUsers())
    // },[dispatch])

    const users = useSelector(state=>state.AuthReducer.user)
    
    useEffect(()=>{
        dispatch(getUsers())
    },[users])
    return(
        <section>
     
         

       
            {users && users.map(el => <UserCard key={el._id} el={el}/>)}
          
     
      
    </section>
    )
}

export default Users