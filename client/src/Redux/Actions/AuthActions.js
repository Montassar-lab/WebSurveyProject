import axios from "axios"
import { CURRENT, FAIL, GETONEUSER, GETUSERS, LOGIN, LOGOUT, REGISTER } from "../Actiontypes/Authtypes"
import { handleError } from "./ErrorActions"


export const register=(signUser,navigate)=>async(dispatch)=>{

    

    try {
        const res = await axios.post('/api/User/auth/signUp',signUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )
        navigate('/profile')
        
    } catch (error) {
        // console.log(error)
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )
        error.response.data.errors.forEach(el => {
            dispatch(handleError(el.msg))
        });
    }
}


export const login=(logUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post("/api/User/auth/signIn",logUser)

        dispatch(
            {
                type : LOGIN,
                payload : res.data
            }
        )

        navigate("/profile")
    } catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )
        error.response.data.errors.forEach(el => {
            dispatch(handleError(el.msg))
        });

    }
}

export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorized : localStorage.getItem("token")
        }
    }
    try {
        const res = await axios.get("/api/User/currentUser",config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {

        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        )
    }
}


export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}


export const getUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/User/readUsers')
        dispatch({
            type : GETUSERS,
            payload : res.data.Users

        })
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/User/deleteUser/${id}`)
        dispatch(getUsers())
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}

export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/User/readUser/${id}`)
        dispatch({
            type : GETONEUSER,
            payload : res.data.oneUser
        })
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}

export const updateUser=(upUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/User/updateUser/${id}`,upUser)
        dispatch(getUsers())
        navigate('/users')
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}

export const deleteCurrentUser=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/User/deleteUser/${id}`)
        dispatch(logout())
        navigate('/')
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}

export const updateProfil=(upProfil,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/User/updateUser/${id}`,upProfil)
        dispatch(current())
        navigate('/profile')
    } catch (error) {
        console.log(error)
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            })
    }
}