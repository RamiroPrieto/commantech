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
          <div className='servicesI__card'>
            <Image
              className="servicesI__image-img"
              src={image}
              alt={text}
              width={46}
              height={46}
            />
          </div>
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
    <div className='services__section'>
      <div className='services__top'>
        <div className='container'>
          <div className='services__top-intro'>
            <h2 className='services__top-title'>What can we offer <span style={{color: '#A16944'}}>you</span>?</h2>
            <h5 className='services__top-description'>Our aim is to suit your needs. At the following sections you can see what we particularly specialise with.</h5>
          </div>
        </div>
        <Image
            className="services__top-image"
            src="/servicesAbsolute.png"
            alt="servicesAbsolute.png"
            width={530}
            height={640}
        />
      </div>
      <div className='container'>
        
        <div className="servicesI__grid">
            <div className="structure__items-item structure__services">
                            <div className="structure__items-item-top">
                                <Image
                                    className="structure_items-item-svg"
                                    src="/structure_services1.svg"
                                    alt="structure_services1.svg"
                                    width={71}
                                    height={80}
                                />
                                <div className='structure__items-item-title'>Composite manufacturing technology improvement</div>
                                <div className='structure__items-item-description'>Taking your study case we can <b>improve the manufacturing technology</b> by developing suitable impregnation, consolidation and if your system is a thermoset composite, the curing cycle. You will require less time to build a part, reducing costs and improving quality.</div>
                            </div>
                            
                        </div>
                        <div className="structure__items-item structure__services structure__white">
                                        <div className="structure__items-item-top item__white">
                                            <Image
                                                className="structure_items-item-svg"
                                                src="/structure_services2.svg"
                                                alt="structure_services2.svg"
                                                width={71}
                                                height={80}
                                            />
                                            <div className='structure__items-item-title'>Drapability and conforming predictions</div>
                                            <div className='structure__items-item-description'>Load carrying is the <b>most important characteristic</b> in a composite part. Controlling the way the fibers accommodate into the mold will assure you improve specific properties in such a direction. From COMMANTECH we can offer drapability and conforming predictions, also when only aesthetics and look are the objective.</div>
                                        </div>
        
                                    </div>
                                    <div className="structure__items-item structure__services">
                                      <div className="structure__items-item-top ">
                                          <Image
                                              className="structure_items-item-svg"
                                              src="/structure_services1.svg"
                                              alt="structure_services1.svg"
                                              width={71}
                                              height={80}
                                          />
                                          <div className='structure__items-item-title'>Structural integrity studies</div>
                                          <div className='structure__items-item-description'>From a structural viewpoint a composite should be optimized to have the best specific fiber oriented properties. We offer you a complete characterization of mechanical properties through inverse engineering FEM structural analysis and non destructive testing to evaluate if your part fits with the purpose it has been designed for.</div>
                                      </div>
                                  </div>
                                  <div className="structure__items-item structure__services structure__white">
                                    <div className="structure__items-item-top item__white">
                                        <Image
                                            className="structure_items-item-svg"
                                            src="/structure_services1.svg"
                                            alt="structure_services1.svg"
                                            width={71}
                                            height={80}
                                        />
                                        <div className='structure__items-item-title'>Potential constituents and tooling</div>
                                        <div className='structure__items-item-description'>Searching for adequate constituent materials is not always an easy task if you want to try with non conventional composite materials. Gaining confidence in new materials developed in the market will let you offer novel designs. We can find out the best cost/performance ratio constituents as well as the right tooling equipment for building your composite part.</div>
                                    </div>
                                    
                                </div>
                                <div className="structure__items-item structure__services">
                                  <div className="structure__items-item-top">
                                      <Image
                                          className="structure_items-item-svg"
                                          src="/structure_services1.svg"
                                          alt="structure_services1.svg"
                                          width={71}
                                          height={80}
                                      />
                                      <div className='structure__items-item-title'>Process quality control monitoring</div>
                                      <div className='structure__items-item-description'>Knowing when a part is well made or within the margins accepted in the industry is a crucial point. From COMMANTECH we can transfer knowledge to your company giving you the tools and good understanding to make a proper quality control.</div>
                                  </div>
                                  
                              </div>
                              <div className="structure__items-item structure__services structure__white">
                                <div className="structure__items-item-top item__white">
                                    <Image
                                        className="structure_items-item-svg"
                                        src="/structure_services1.svg"
                                        alt="structure_services1.svg"
                                        width={71}
                                        height={80}
                                    />
                                    <div className='structure__items-item-title'>Project management</div>
                                    <div className='structure__items-item-description'>Planning each part fabrication is essential in your project to be on time and with the best resources exploitation. From COMMANTECH we can offer you a complete project management that will suit your requirements.</div>
                                </div>
                              
                            </div>
                                                
            {/* <ServiceTextBox image="/incrementar1.svg" title="Drapability and conforming predictions" text="Searching for adequate constituent materials is not always an easy task if you want to try with non conventional composite materials. Gaining confidence in new materials developed in the market will let you offer novel designs. We can find out the best cost/performance ratio constituents as well as the right tooling equipment for building your composite part."/>
            <ServiceTextBox image="/obrero.svg" title="Structural integrity studies" text="Load carrying is the most important characteristic in a composite part. Controlling the way the fibers accommodate into the mold will assure you improve specific properties in such a direction. From COMMANTECH we can offer drapability and conforming predictions, also when only aesthetics and look are the objective."/>
            <ServiceTextBox image="/iso.svg" title="Potencial constituents and tooling" text="Knowing when a part is well made or within the margins accepted in the industry is a crucial point. From COMMANTECH we can transfer knowledge to your company giving you the tools and good understanding to make a proper quality control."/>
            <ServiceTextBox image="/incrementar1.svg" title="Process quality control monitoring" text="From a structural viewpoint a composite should be optimized to have the best specific fiber oriented properties. We offer you a complete characterization of mechanical properties through inverse engineering FEM structural analysis and non destructive testing to evaluate if your part fits with the purpose it has been designed for."/>
            <ServiceTextBox image="/obrero2.svg" title="Project management" text="Planning each part fabrication is essential in your project to be on time and with the best resources exploitation. From COMMANTECH we can offer you a complete project management that will suit your requirements."/> */}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage