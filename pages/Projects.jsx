import Project from '../components/Project'
import projects from "../utils/projects"


export default function ProjectsPage() {
    return (
        <div>
           <div className='gap-3 container d-flex justify-content-evenly flex-wrap flex-col mt-5'>
                {projects.map(project=>{
                    return <Project project={project} key={project.title}/>
                })}
           </div>  
        </div>
    )
}