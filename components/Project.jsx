
const styles = {
    card:{
        backgroundColor: 'white'
    }
}


export default function Project({project}){
    
    return (
        <>
            <div className="mt-5" style={styles.card}>
                <h2>{project.title}</h2>
            </div>
        </>
    )
}