import {Navbar,Container,Nav} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../Redux/Actions/AuthActions"

const Webnav=()=>{

    const token = localStorage.getItem("token")
    const user = useSelector(state=> state.AuthReducer.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>WEBSURVEY</Navbar.Brand>
                        <Nav className="me-auto">

                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            

                            {
                                (token && user.role == 'admin') ?

                                <>
                                    <Nav.Link as={Link} to='/profile'>Profile</Nav.Link> 
                                    <Nav.Link as={Link} to='/users'>Users</Nav.Link>
                                    <Nav.Link as={Link} to='/QuestionInterface'>QuizInterface</Nav.Link>
                                    <Nav.Link as={Link} to='/QuizList'>QuizList</Nav.Link>
                                    <Nav.Link as={Link} to='/Survey'>Survey</Nav.Link>
                                    <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
                                    
                                </>:
                                 (token && user.role == 'user') ?
                                 <>
                                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                                 <Nav.Link as={Link} to='/Survey'>Survey</Nav.Link>                                
                                 <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
                                 </>

                                 :
                                 (token && user.role == 'professional') ?
                                 <>
                                 <Nav.Link as={Link} to='/profile'>Profile</Nav.Link> 
                                 <Nav.Link as={Link} to='/QuestionInterface'>QuizInterface</Nav.Link>
                                 <Nav.Link as={Link} to='/Survey'>Survey</Nav.Link>
                                 <Nav.Link as={Link} to={`/QuizOwnerList/${user._id}`}>Your Quizs</Nav.Link>                                 
                                 <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
                                 </>
                                 :
                                <>
                                    
                                    <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                </>
                                }
                                 
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Webnav