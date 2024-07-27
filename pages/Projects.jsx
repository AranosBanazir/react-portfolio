import Project from '../components/Project'
import projects from "../utils/projects"


export default function ProjectsPage() {
    return (
        <div className='container offset'>
           <div className='row m-5 gap-3'>
                {projects.map(project=>{
                    return <Project project={project} key={project.title}/>
                })}
           </div>  
        </div>
    )
}