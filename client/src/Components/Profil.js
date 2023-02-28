import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current, deleteCurrentUser } from "../Redux/Actions/AuthActions"
import { Button, Card } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"


const Profil=()=>{



    const user = useSelector(state=>state.AuthReducer.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(current())
    },[dispatch])

    return(
        <div>
            {
                user &&
                <>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text> {user.email}</Card.Text>

                            <Card.Text> {user.age}</Card.Text>
                            <Card.Text> {user.cin}</Card.Text>
                            <Card.Text> {user.matriculefiscale}</Card.Text>
                            <Card.Text> {user.adress}</Card.Text>
                            <Card.Text> {user.nationality}</Card.Text>
                            <Card.Text> {user.highesteducationlevel}</Card.Text>

                            <Button as={Link} to={`/editProfil/${user._id}`}>Edit</Button>
                            <Button variant="danger" onClick={()=>dispatch(deleteCurrentUser(user._id,navigate))} >Delete</Button>
                        </Card.Body>
    </Card>
                </>
            }
        </div>
    )
}

export default Profil