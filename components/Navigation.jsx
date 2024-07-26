import { NavLink } from "react-router-dom"


export default function Nav(){
    return (
        
        <nav className="d-flex flex-wrap justify-content-center w-100 permanent-marker-regular">
            <NavLink  to='/about'>
                About
            </NavLink>


            <NavLink  to='/projects'>
                Portfolio
            </NavLink>

            <NavLink  to='/resume'>
                Resume
            </NavLink>
            
            <NavLink  to='/contact'>
                Contact
            </NavLink>
        </nav>
    )
}