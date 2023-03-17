import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../Redux/Actions/AuthActions"

const UserCard=({el})=>{

  const dispatch = useDispatch()
  
    return(
      <div className="form-box">
      <div className="form-value">
      
      <Card.Body>
      <div className="users-text">
        <Card.Title>{el.name}</Card.Title>
      
        <Card.Text> {el.cin}</Card.Text>
        <Card.Text> {el.role}</Card.Text>
        <Card.Text> {el.email}</Card.Text>

        <div className="register">        
        <button as={Link} to={`/editUser/${el._id}`}>Edit</button>
        <button variant="danger" onClick={()=>dispatch(deleteUser(el._id))} >Delete</button>
        </div>

        </div>
      </Card.Body>
      </div> 
       </div>
    )
}

export default UserCard