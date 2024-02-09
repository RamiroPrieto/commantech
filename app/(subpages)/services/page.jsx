import Image from 'next/image'
import '../../globals.css'
import styles from '../../services.module.css'

export const metadata = {
  title: 'Services - COMMANTECH',
  description: 'Our services',
}

const ServiceTextBox = ({title, image, text}) => {
  return (
      <div className="servicesI__item">
        <div className='servicesI__image'>
          <Image
            className="servicesI__image-img"
            src={image}
            alt={text}
            width={46}
            height={46}
          />
        </div>
        <h3 className='servicesI__subtitle'>
          {title}
        </h3>
        <div className='servicesI__text'>
          <p>
              {text}
          </p>
        </div>
      </div>
  );
}

const ServicesPage = () => {
  return (
    <div className='container'>
      <div className='servicesI__title'>Our Services</div>
      <div className="servicesI__grid">
          <ServiceTextBox image="/fibra1.svg" title="Composite manufacturing technology improvement" text="Taking your study case we can improve the manufacturing technology by developing suitable impregnation, consolidation and if your system is a thermoset composite, the curing cycle. You will require less time to build a part, reducing costs and improving quality."/>
          <ServiceTextBox image="/incrementar1.svg" title="Drapability and conforming predictions" text="Searching for adequate constituent materials is not always an easy task if you want to try with non conventional composite materials. Gaining confidence in new materials developed in the market will let you offer novel designs. We can find out the best cost/performance ratio constituents as well as the right tooling equipment for building your composite part."/>
          <ServiceTextBox image="/obrero.svg" title="Structural integrity studies" text="Load carrying is the most important characteristic in a composite part. Controlling the way the fibers accommodate into the mold will assure you improve specific properties in such a direction. From COMMANTECH we can offer drapability and conforming predictions, also when only aesthetics and look are the objective."/>
          <ServiceTextBox image="/iso.svg" title="Potencial constituents and tooling" text="Knowing when a part is well made or within the margins accepted in the industry is a crucial point. From COMMANTECH we can transfer knowledge to your company giving you the tools and good understanding to make a proper quality control."/>
          <ServiceTextBox image="/incrementar1.svg" title="Process quality control monitoring" text="From a structural viewpoint a composite should be optimized to have the best specific fiber oriented properties. We offer you a complete characterization of mechanical properties through inverse engineering FEM structural analysis and non destructive testing to evaluate if your part fits with the purpose it has been designed for."/>
          <ServiceTextBox image="/obrero2.svg" title="Project management" text="Planning each part fabrication is essential in your project to be on time and with the best resources exploitation. From COMMANTECH we can offer you a complete project management that will suit your requirements."/>
      </div>
    </div>
  )
}

export default ServicesPage