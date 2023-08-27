import Logo from '../../assets/images/1.png'
import {Link} from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react'



const Home=()=>{
    const [letterClass,setletterClass]=useState('text-animate');
    const nameArray=['o','h','n',' ','j','o','s','h','u','a'];
    const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r'];


    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setletterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
    


    return(<>
    <div className="container home-page">
        <div className="text-zone">
            <h1><span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i</span>
            <span className={`${letterClass} _11`}>!</span>
            
            <br/> 
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={Logo} alt="dev"></img>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={25}/>
            </h1>
            <h2>Frontend Developer/Java expert</h2>
            <Link to="/contect" className="flat-button">CONTECT ME</Link>

            
        </div>
        </div></>)
}

export default Home;