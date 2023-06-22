import Image from 'next/image'
import '../globals.css'
import styles from '../projects.module.css'

const ProjectPreview = ({ src, text }) => {
  return (
    <div className={styles.projectbox}>
      <Image src={src} alt={text} height={200} width={400}/>
      <h5 className={styles.text}>{text}</h5>
    </div>
  )
}


const ProjectsPreview = () => {
  return (
    <div className={styles.projects}>
        <h2 className={styles.title}>Our Projects</h2>
        <div className={styles.grid}>
            <ProjectPreview src="/project-1.png" text="Kinetic and chemorheological modeling of thermosetting
							polyurethanes obtained from an epoxidized soybean oil
							polyol crosslinked with glycerin"/>
            <ProjectPreview src="/project-2.jpeg" text="Vacuum Infusion Process Layout Design (Antares Catamarans)"/>
        </div>
    </div>
  )
}

export default ProjectsPreview