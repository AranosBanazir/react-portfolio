import { NavLink } from "react-router-dom"


const styles = {
    h1:{
        color: '#E5D0CC'
    }
}

export default function Nav(){
    return (
        <>
        <div>
            <h1 style={styles.h1} className="permanent-marker-regular">
                Caleb Saiia
            </h1>
        </div>
        <nav className="d-flex flex-wrap justify-content-center w-100 permanent-marker-regular">
            <NavLink  to='/about'>
                About
            </NavLink>


            <NavLink  to='/projects'>
                Portfolio
            </NavLink>

            <NavLink  to='/contact'>
                Contact
            </NavLink>
        </nav>
        </>
    )
}