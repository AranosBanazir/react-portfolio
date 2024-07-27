

const styles = {
    card:{
        backgroundColor: '#455561',
        borderRadius: '20px',
        padding: '10px',
        textAlign: 'center',
        color: 'B4D2E7',
    },
    link:{
        color: 'black',
        backgroundColor: 'peachpuff',
    },
    text:{
        color: '#E5D0CC'
    },
    header:{
        color: 'peachpuff',
        fontSize: '40px',
        textShadow: '-4px 2px black',
        position: 'relative',
        // right: '450px',
        // transform: 'rotate(-45deg)',
        borderRadius: '50px',
    }
}

export default function Project({project}){
    const deployedLink = project.deployedURL === '' ? '' : (<a href={project.deployedURL} className="btn m-3 butn-hover" style={styles.link}>Deployed Project</a>)
    const repoLink = project.repo === '' ? '' : (<a href={project.repo} className="btn m-3 butn-hover" style={styles.link}>Github Repo</a>)
    let img = project.image === '' ? '' : (<img src={project.image} className="img-fluid rounded w-200" ></img>)

    if (project.image.match('mp4')){
        img = (
        <video width="700" height="" autoPlay = {true} loop = {true} preload="auto" muted={true}>
            <source src={project.image} type="video/mp4"/>
        </video>
        ) 
    }



    return (
        <>
                <div className="card col-12 text-center anchor" style={styles.card}>
                    <div style={styles.con}>
                        <h5 className="card-title banner" style={styles.header}>{project.title}</h5>
                        <p className="card-subtitle mb-2 light-hover" style={{fontSize: '26px'}}>{project.desc}</p>
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