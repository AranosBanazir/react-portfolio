import Nav from './Navigation'

 const styles = {
    header:{
        backgroundColor: '#444554',
        fontSize: '30px'
    }
 }


export default function Header(){

    

    return (
        <div className='d-flex justify-content-around p-4 gradient' id='header' style={styles.header}>
            <Nav/>
        </div>

    )

}