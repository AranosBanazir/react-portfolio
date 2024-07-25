

const styles = {
    card:{
        backgroundColor: '#455561',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'center'
    },
    link:{
        color: 'black',
        backgroundColor: 'peachpuff',
     
        // right: '50px'
    }
}

export default function Project({project}){
    const deployedLink = project.deployedURL === '' ? '' : (<a href={project.deployedURL} className="btn m-3 butn-hover" style={styles.link}>Deployed Project</a>)
    const repoLink = project.repo === '' ? '' : (<a href={project.repo} className="btn m-3 butn-hover" style={styles.link}>Github Repo</a>)
    let img = project.image === '' ? '' : (<img src={project.image} className="img-fluid rounded"></img>)

    if (project.image.match('mp4')){
        img = (
        <video width="320" height="240" autoPlay = {true} loop = {true} preload="auto" muted={true}>
            <source src={project.image} type="video/mp4"/>
        </video>
        ) 
    }

    const imgFadeIn = (e) =>{
     if (project.image === '') return   
        // e.target.attributes.style.value = `background: url(${project.image});` 
    } 
    
    // const imgFadeOut = (e) =>{
    //     e.target.attributes.style.value = styles.card
    // }

    return (
        <>
            <div onMouseOver={imgFadeIn}  className="card max-w-50 d-flex flex-col" style={styles.card}>
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-subtitle mb-2 text-body-secondary">{project.desc}</p>
                    {img}
                    <div>
                        {repoLink}
                        {deployedLink}
                    </div>
                </div>
            </div>




        </>
    )
}