import Image from 'next/image'
import '../../globals.css'
import styles from '../../services.module.css'

const ServiceTextBox = ({title, image, text}) => {
  return (
      <div className={styles.service}>
        <h3>
          {title}
        </h3>
        <div>
          <Image
            className={styles.image}
            src={image}
            alt={text}
            width={180}
            height={150}
          />
          <p>
              {text}
          </p>
        </div>
      </div>
  );
}

const ServicesPage = () => {
  return (
    <div className={styles.gridfull}>
        <ServiceTextBox image="/services_1.png" title="COMPOSITE MANUFACTURING TECHNOLOGY IMPROVEMENT" text="Taking your study case we can improve the manufacturing technology by developing suitable impregnation, consolidation and if your system is a thermoset composite, the curing cycle. You will require less time to build a part, reducing costs and improving quality."/>
        <ServiceTextBox image="/services_2.png" title="POTENTIAL CONSTITUENTS AND TOOLING" text="Searching for adequate constituent materials is not always an easy task if you want to try with non conventional composite materials. Gaining confidence in new materials developed in the market will let you offer novel designs. We can find out the best cost/performance ratio constituents as well as the right tooling equipment for building your composite part."/>
        <ServiceTextBox image="/services_3.png" title="DRAPABILITY AND CONFORMING PREDICTIONS" text="Load carrying is the most important characteristic in a composite part. Controlling the way the fibers accommodate into the mold will assure you improve specific properties in such a direction. From COMMANTECH we can offer drapability and conforming predictions, also when only aesthetics and look are the objective."/>
        <ServiceTextBox image="/services_4.png" title="PROCESS QUALITY CONTROL MONITORING" text="Knowing when a part is well made or within the margins accepted in the industry is a crucial point. From COMMANTECH we can transfer knowledge to your company giving you the tools and good understanding to make a proper quality control."/>
        <ServiceTextBox image="/services_5.png" title="STRUCTURAL INTEGRITY STUDIES" text="From a structural viewpoint a composite should be optimized to have the best specific fiber oriented properties. We offer you a complete characterization of mechanical properties through inverse engineering FEM structural analysis and non destructive testing to evaluate if your part fits with the purpose it has been designed for."/>
        <ServiceTextBox image="/services_6.png" title="PROJECT MANAGEMENT" text="Planning each part fabrication is essential in your project to be on time and with the best resources exploitation. From COMMANTECH we can offer you a complete project management that will suit your requirements."/>
    </div>
  )
}

export default ServicesPage