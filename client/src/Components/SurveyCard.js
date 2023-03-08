
import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";



const SurveyCard=({el})=>{

    
        
       return(
        <div>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>

                        <Card.Title>{el.title}</Card.Title>
                        
                        
                                        
                    <Button as={Link} to={`/SurveyAnswer/${el._id}` }>answer this survey</Button>
                    <Button as={Link} to={`/SurveyResult/${el._id}` }>survey Result</Button>
                        
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    )
}

export default SurveyCard