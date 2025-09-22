import styles from "../../projects.module.css";
import Image from "next/image";

export const metadata = {
  title: 'Projects - COMMANTECH',
  description: 'Our projects',
}

const Project = ({ src, text, title, download }) => {
  return (
    <div className="projects__right-item">
      <div className="projects__right-title">
          {title}
      </div>
      <div className="projects__right-description">
          {text}
      </div>
      <div className={download}>
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
    </div>
  );
  
}

const ProjectsPage = () => {
  return (
    <div className="projects" style={{position: "relative"}}>
      <Image
          className='projectsf__img'
          src="/fondoProjects.svg"
          alt="About"
          width={300}
          height={334}
      />
      <Image
          className='projectsl__img'
          src="/fondoProjects2.svg"
          alt="About"
          width={172}
          height={214}
      />
    <div className="container projects__container">
      <h1 className="projects__title">Some of our <span style={{ color: "#A16944" }}>works</span></h1>
      <div className="projects">
        <div className="projects__item"> 
          <div className="projects__item-left">
            <div className="projects__item-title">Biopolymer thin films development</div>
            <div className="projects__item-info">We were commissioned to build thin films with a previous developed formulation. Those were performed with a polyurethane matrix made from a 100% biopolyol and common MDI isocyanate...</div>
            <a className="projects__item-button" href="/studycase-biopolymer-thinfilms.pdf" download>Open PDF</a>
          </div>
          <div className="projects__item-right first">
            <Image
              className="projects__img-inner"
              src="/projectImg1.png"
              alt="projects.png"
              width={440}
              height={500}
            />
          </div>
        </div>
        <div className="projects__item"> 
          <div className="projects__item-right">
            <Image
              className="projects__img-inner"
              src="/projectImg2.png"
              alt="projects.png"
              width={440}
              height={500}
            />
          </div>
          <div className="projects__item-left">
            <div className="projects__item-title">Vacuum infusion process layout design (CR Yachts)</div>
            <div className="projects__item-info">In this occasion, CR Yachts, a Sweden yard with many years of experience on the sailing cruising yachts industry, required an improvement on his building process for hiw new 490 DS version, designed by BRYD...</div>
            <a className="projects__item-button" href="/study-case-vacuum-infusion.pdf" download>Open PDF</a>
          </div>
        </div>
        <div className="projects__item"> 
          <div className="projects__item-left">
            <div className="projects__item-title">Hull and deck full structural analysis</div>
            <div className="projects__item-info">We developed an advanced finite element model to deeply understand the hull and deck composites behavior of a 51 footer sailing boat that must reach the best quality standards.</div>
          </div>
          <div className="projects__item-right">
            <Image
              className="projects__img-inner"
              src="/projectImg_3.png"
              alt="projects.png"
              width={440}
              height={500}
            />
          </div>
        </div>
        <div className="projects__title-secondary">Our <span style={{ color: "#A16944" }}>reports</span></div>
        <div className="projects__item"> 
          <div className="projects__item-bottom">
            <div className="projects__item-bottom-title">Kinetic and chemorheological modeling of thermosetting polyurethanes obtained from an epoxidized soybean oil polyol crosslinked with glycerin</div>
            <div className="projects__item-bottom-info">Towards the development of a new matrix system, it is necessary to create cure kinetic and chemorheological models to deeply understand the curing behavior and the viscosity evolution against time of the resin involved in. In this occasion, Franco Armanasco participated on the development of a cure kinetic and chemorheological model of a soybean-based polyurethane system, in which different manufacturing processes can be predicted.</div>
            <a className="projects__item-button" href="/Kinetic-and-chemorheological-modeling-of-thermosetting.pdf" download>Download report</a>
          </div>
        </div>
        <div className="projects__item"> 
          <div className="projects__item-bottom">
            <div className="projects__item-bottom-title">Vacuum infusion process layout design (Antares Catamaran)</div>
            <div className="projects__item-bottom-info">40 Grados Sur, a yard dedicated to build Antares Catamarans, came to us with the necessity on improving its composite manufacturing process. They used to apply hand-lay up manufacturing processes to build all its composites parts. COMMANTECH helped them start using VARTM (vacuum assisted resin transfer molding), better known as infusion. We designed the infusion layout process and obtained the required supplies to build the hull and the deck, as well as bulkheads and big parts.</div>
            <a className="projects__item-button" href="/study-case-vacuum-infusion.pdf" download>Download report</a>
          </div>
        </div>
        <div className="projects__item"> 
          <div className="projects__item-bottom">
            <div className="projects__item-bottom-title">The role of post-cure cycle on the thermomechanical properties of soy-based polyurethane thermosets</div>
            <div className="projects__item-bottom-info">In continuity on the research and development of the new biobased polyurethane system previously studied, Franco Armanasco participated on the characterization of the system in order to obtain its mechanical behavior by changing constituent in its formulation as well as its post-cure process. The results gave the research a boost to jump to a next step towards the development of new biobased resin systems.</div>
            <a className="projects__item-button" href="/The-role-of-post-cure-cycle-on-the-thermomechanical-properties-of-soy-based-polyurethane-thermosets.pdf" download>Download report</a>
          </div>
        </div>
        {/* <div className="projects__left">
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
        </div> */}
        {/* <div className="projects__right">
          <Project src="/Kinetic-and-chemorheological-modeling-of-thermosetting.pdf" download="download"  title="Kinetic and chemorheological modeling of thermosetting polyurethanes obtained from an epoxidized soybean oil polyol crosslinked with glycerin" text="Towards the development of a new matrix system, it is necessary to create cure kinetic and chemorheological models to deeply understand the curing behavior and the viscosity evolution against time of the resin involved in. In this occasion, Franco Armanasco participated on the development of a cure kinetic and chemorheological model of a soybean-based polyurethane system, in which different manufacturing processes can be predicted." />
          <Project src="/project-2.jpeg" download="noDownload"  title="Vacuum Infusion Process Layout Design (Antares Catamarans)" text="40 Grados Sur, a yard dedicated to build Antares Catamarans, came to us with the necessity on improving its composite manufacturing process. They used to apply hand-lay up manufacturing processes to build all its composites parts. COMMANTECH helped them start using VARTM (vacuum assisted resin transfer molding), better known as infusion. We designed the infusion layout process and obtained the required supplies to build the hull and the deck, as well as bulkheads and big parts." />
          <Project src="/The-role-of-post-cure-cycle-on-the-thermomechanical-properties-of-soy-based-polyurethane-thermosets.pdf" download="download" title="The role of post-cure cycle on the thermomechanical properties of soy-based polyurethane thermosets" text="In continuity on the research and development of the new biobased polyurethane system previously studied, Franco Armanasco participated on the characterization of the system in order to obtain its mechanical behavior by changing constituent in its formulation as well as its post-cure process. The results gave the research a boost to jump to a next step towards the development of new biobased resin systems." />
        </div> */}
      </div>
    </div>
    </div>
  )
}

export default ProjectsPage