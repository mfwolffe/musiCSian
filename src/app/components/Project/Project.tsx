
import ProjectCard from '../ProjectCard/ProjectCard';
import ContentHeader from '../ContentHeader/ContentHeader'
import styles from './Project.module.css'

import { shortProjects } from '@/app/data/data';


const AboutProjects = () => {
  return (
    <div id="projectsCard" className={`${styles.ProjContainer} w-full mt-6`}>

      <div className="mb-6 flex items-center">
        <ContentHeader title="projects" inCard={false} aside={'(many/most of these are WiP &&/|| just for fun!)'} />
      </div>

      <div className="flex">
        <div id="projGrid" className={`grid mlr-auto gap-6 grid-flow-row mb-6`}>
          { 
            shortProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} imgPath={project.imgPath} shortDescript={project.shortDescript} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default AboutProjects;