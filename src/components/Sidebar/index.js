import './index.scss'
import {Link,NavLink} from 'react-router-dom'
import SubLogo from '../../assets/images/logo_sub.png'
import Logo from '../../assets/images/1.png'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub ,faYoutube} from '@fortawesome/free-brands-svg-icons'



const SideBar=()=>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt="logo"/>
            <img className='sub-logo' src={SubLogo} alt="sublogo"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>

            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>

            </NavLink>
            <NavLink exact="true" activeclassname="active"className="contect-link" to="/contect">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>

            </NavLink>
        </nav>
        <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/JohnTheCreater">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>

        <li>
            <a target="_blank" rel="noreferrer" href="https://youtube.com">
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
            </a>
        </li>
        </ul>

    </div>
)

export default SideBar;
