import styles from "../../projects.module.css";
import Image from "next/image";

export const metadata = {
  title: 'Projects - COMMANTECH',
  description: 'Our projects',
}

const Project = ({ src, text, position }) => {
  if (position === 'left') {
    return (
      <div className={styles.projectbox_full_left}>
        <Image src={src} alt={text} height={200} width={400}/>
        <p>{text}</p>
      </div>
    )
  } else {
    return (
      <div className={styles.projectbox_full_right}>
        <p>{text}</p>
        <Image src={src} alt={text} height={200} width={400}/>
      </div>
    )
  }
  
}

const ProjectsPage = () => {
  return (
    <div className={styles.page}>
      <ul>
        <Project src="/project-1.png" text="Kinetic and chemorheological modeling of thermosetting polyurethanes obtained from an epoxidized soybean oil polyol crosslinked with glycerin" position="left" />
        <Project src="/project-2.jpeg" text="Vacuum Infusion Process Layout Design (Antares Catamarans)" position="right" />
        <Project src="/project-3.jpg" text="Soybean oil-based polyurethane resin characterization and development" position="left" />
      </ul>
    </div>
  )
}

export default ProjectsPage