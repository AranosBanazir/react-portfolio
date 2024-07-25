import Project from '../components/Project'
import projects from "../utils/projects"


export default function ProjectsPage() {
    return (
        <div>
            <h1>Projects Me</h1>
           <div className='container d-flex justify-content-evenly flex-wrap'>
                {projects.map(project=>{
                    return <Project project={project} key={project.title}/>
                })}
           </div>  
        </div>
    )
}