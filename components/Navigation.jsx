
import { NavLink } from "react-router-dom"

const styles = {
    nav:{
        display: 'flex',
        gap: 12
    },

    link:{
        margin: 20
    }
}

export default function Nav(){

    // const getActiveStyle = ({isActive}) => isActive ? 'active' : ''

    return (
        <nav>
            <NavLink style={styles.link} to='/'>
                Home
            </NavLink>

            <NavLink style={styles.link} to='/about'>
                About
            </NavLink>

            <NavLink style={styles.link} to='/contact'>
                Contact
            </NavLink>

            <NavLink style={styles.link} to='/projects'>
                Portfolio
            </NavLink>

            <NavLink style={styles.link} to='/resume'>
                Resume
            </NavLink>
        </nav>
    )
}