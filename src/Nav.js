import './App.css'
import {Link} from 'react-router-dom'

function Nav(){

    const navStyle= {
        color: 'white'
    }

return(
    <nav className="nav">
        <ul className="nav-links">

            <Link style={navStyle}  to='/weather'>
               <li>Weather</li>
            </Link>
            <Link style={navStyle}  to='/news'>
               <li>News</li>
            </Link>
        </ul>
    </nav>
)
}

export default Nav