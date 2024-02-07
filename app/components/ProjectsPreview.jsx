import Image from 'next/image'
import '../globals.css'
import styles from '../projects.module.css'

const ProjectsPreview = () => {
  return (
    <div className="proyects container">
      <Image className='proyects__image' src="proyect1.png" alt="proyect1.png" height={200} width={400}/>
      <Image className='proyects__image' src="proyect2.png" alt="proyect2.png" height={200} width={400}/>  
    </div>
  )
}

export default ProjectsPreview