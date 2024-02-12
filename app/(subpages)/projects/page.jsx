import styles from "../../projects.module.css";
import Image from "next/image";

export const metadata = {
  title: 'Projects - COMMANTECH',
  description: 'Our projects',
}

const Project = ({ src, text, title }) => {
  return (
    <div className="projects__right-item">
      <div className="projects__right-title">
          {title}
      </div>
      <div className="projects__right-description">
          {text}
      </div>
      <a href={src} className="projects__right-download" download>
        <div>
          Download Report 
        </div>
          <Image
            className="projects__downloadimg"
            src="/download.svg"
            alt="download.svg"
            width={14}
            height={15}
          />
      </a>
    </div>
  );
  
}

const ProjectsPage = () => {
  return (
    <div className="container">
      <h1 className="projects__title">Featured - Works!</h1>
      <div className="projects ">
        <div className="projects__left">
          <div className="projects__img">
          <Image
              className="projects__img-inner"
              src="/projects.png"
              alt="projects.png"
              width={46}
              height={46}
            />
          </div>
          <div className="project__left-title">
          Vacuum Infusion Process Layout Design (CR yachts)
          </div>
          <div className="project__left-text">
          In this occasion, CR Yachts, a Sweeden yard with many years of experience on the sailing cruising yachts industry, required an improvement on his building process for his new 490 DS version, designed by BRYD. The main challenge of Nordic boats is the thicker thickness needed in their bottom, which translates to higher heat generation during the infusion process. COMMANTECH developed all the infusion design processes with the corresponding layout and supplies necessary to build the hull of this beautiful boat.
          </div>
        </div>
        <div className="projects__right">
          <Project src="/project-1.png" title="Kinetic and chemorheological modeling of thermosetting polyurethanes obtained from an epoxidized soybean oil polyol crosslinked with glycerin" text="Towards the development of a new matrix system, it is necessary to create cure kinetic and chemorheological models to deeply understand the curing behavior and the viscosity evolution against time of the resin involved in. In this occasion, Franco Armanasco participated on the development of a cure kinetic and chemorheological model of a soybean-based polyurethane system, in which different manufacturing processes can be predicted." />
          <Project src="/project-2.jpeg" title="Vacuum Infusion Process Layout Design (Antares Catamarans)" text="40 Grados Sur, a yard dedicated to build Antares Catamarans, came to us with the necessity on improving its composite manufacturing process. They used to apply hand-lay up manufacturing processes to build all its composites parts. COMMANTECH helped them start using VARTM (vacuum assisted resin transfer molding), better known as infusion. We designed the infusion layout process and obtained the required supplies to build the hull and the deck, as well as bulkheads and big parts." />
          <Project src="/project-3.jpg" title="The role of post-cure cycle on the thermomechanical properties of soy-based polyurethane thermosets" text="In continuity on the research and development of the new biobased polyurethane system previously studied, Franco Armanasco participated on the characterization of the system in order to obtain its mechanical behavior by changing constituent in its formulation as well as its post-cure process. The results gave the research a boost to jump to a next step towards the development of new biobased resin systems." />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage