import { useSelector } from "react-redux"


const Errorhandling =()=>{

    const Error = useSelector(state=>state.ErrorReducer)

    return(
        <div>
            {
                Error.map(el=> <h1>{el.msg}</h1>)
            }
        </div>
    )
}

export default Errorhandling