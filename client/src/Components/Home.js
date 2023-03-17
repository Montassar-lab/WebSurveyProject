import { Link } from 'react-router-dom'
import MyImage from '../homeimage1.jpg'
import myImage1 from '../animatedimage1'

const Home=()=>{
    return(
        <section>

          <div className='homesection1'>

            <div>
                <img src={MyImage} alt="Notfound"/>
            </div>

            <div>
              <h2>Welcome Abroad</h2> 
              <h6>If you're looking for a side activity or a new business idea, you may have considered ways to make money online. When you know what you're doing, making money online is quite simple. You can do it full-time or part-time, right from the comfort of your own home.</h6> 
              <br/>
              <button ><Link style={{width : "25%" ,color : "black",textDecoration:'none'}} to={`/register`}>Join now!</Link></button>
            </div>

          </div> 

        </section>
    )
}

export default Home