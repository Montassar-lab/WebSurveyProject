import { Button, Card } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteUser } from "../Redux/Actions/AuthActions"

const UserCard=({el})=>{

  const dispatch = useDispatch()
  
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text> {el.email}</Card.Text>

        <Card.Text> {el.age}</Card.Text>
        <Card.Text> {el.cin}</Card.Text>
        <Card.Text> {el.matriculefiscale}</Card.Text>
        <Card.Text> {el.adress}</Card.Text>
        <Card.Text> {el.nationality}</Card.Text>
        <Card.Text> {el.highesteducationlevel}</Card.Text>

        <Button as={Link} to={`/editUser/${el._id}`}>Edit</Button>
        <Button variant="danger" onClick={()=>dispatch(deleteUser(el._id))} >Delete</Button>
      </Card.Body>
    </Card>
    )
}

export default UserCard