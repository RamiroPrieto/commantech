import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
    title: 'About COMMANTECH',
    description: 'About Commantech',
}

const AboutPage = () => {
  return (
    <div className="about container">
        <h2 className='about__title'>Let’s get to - know each other </h2>
        <div className='about__intro'>
            The use of new renewable composite materials helps to counterbalance the extensive use of petroleum-based 
            polymers used today. Hence, the industry is investing too much effort on applying them in 
            their products.
        </div>
        <div className='about__founder'>
            <div className='about__founder-container first__right'>
                <Image
                    className='about__ornament'
                    src="/ornament.png"
                    alt="ornament"
                    width={166}
                    height={224}
                    
                />
                <Image
                    className="about__founder-img"
                    src="/francoFace.png"
                    alt="Franco Armanasco"
                    width={170}
                    height={170}
                    priority
                />
            </div>
            <div className='about__founder-info'>
                <div className='about__founder-subtitle'>About the founder</div>
                <div className='about__founder-name'>Franco Armanasco</div>
                <div className='about__founder-text'>
                    Franco was born in Argentina. He has obtained a Degree in Marine Engineering in Buenos Aires. 
                    After graduating, he began his career working as a structural composite designer for the sailing 
                    and motor yacht industry, participating in the development of sailing yachts from 30 ft to 100 ft 
                    constructed in Italy and Argentina. His passion in yacht building has motivated him to get more 
                    involved into composites manufacturing technologies. In 2019 he obtained a Master’s degree in 
                    composites engineering with a project thesis based on rheo-kinetics studies of novel bio-based 
                    polyurethane resins. He has developed manufacturing improvements of yacht buildings in Argentina,
                    applying specific software and finding out the best products available in the market. 
                    In 2020 he started a PhD in engineering with a deep research and development in flax/soy-based 
                    polyurethane prepregs and its application in ATL/AFP manufacturing technologies. In the meantime, 
                    he has been collaborating with a Canadian research center dedicating his time in developing novel 
                    bio-sourced composite materials.
                </div>
                <div className='about__founder-degrees'>
                    <div className='about__founder-degreesItem'>
                        <Image
                            src="/degree1.svg"
                            alt="University Degree
                            Marine Engineering"
                            width={47}
                            height={47}
                            
                        />
                        <div>
                            University Degree Marine Engineering
                        </div>
                    </div>
                    <div className='about__founder-degreesItem'>
                        <Image
                            src="/degree2.svg"
                            alt="Master’s Degree
                            Composites Engineering"
                            width={47}
                            height={47}
                            
                        />
                        <div>
                        Master’s Degree Composites Engineering
                        </div>
                    </div>
                    <div className='about__founder-degreesItem'>
                        <Image
                            src="/title1.svg"
                            alt="Doctor of Philosophy
                            Bio Composites"
                            width={47}
                            height={47}
                            
                        />
                        <div>
                            PhD Degree Bio Composites Engineering
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='about__founder second'>
            <div className='about__founder-container second__right'>
                <Image
                    className='about__ornament second__ornament'
                    src="/ornament.png"
                    alt="ornament"
                    width={166}
                    height={224}
                    
                />
                <Image
                    className="about__founder-img"
                    src="/MartinButto.png"
                    alt="Franco Armanasco"
                    width={170}
                    height={170}
                    priority
                />
            </div>
            <div className='about__founder-info second__left'>
                <div className='about__founder-subtitle'>Mechanical Engineer</div>
                <div className='about__founder-name'>Martin Butto</div>
                <div className='about__founder-text'>
                Martin was born in Argentina. He graduated with honours from Universidad de Buenos Aires obtaining 
                a degree in Mechanical Engineering. He began his career working in Tenaris, one of the world’s 
                largest steel pipes manufacturers, as a process engineer on the heat treatment lines and as a 
                product engineer on both sucker rods division and on pipes for automotive, mining, energy and 
                general-purpose applications. Given his draw towards material science and recognizing the 
                ever-growing applications of plastics, he decided to pursue a PhD in engineering in 2020. 
                His research was aimed towards the development of self reinforced, biobased and biodegradable 
                thermoplastics. He then decided to go back into an industrial setting to gain hands-on experience 
                on composite design and manufacturing. So far, he has been working on the application of composite 
                materials to high-performance agricultural applications.
                </div>
                <div className='about__founder-degrees'>
                    <div className='about__founder-degreesItem second__degreesItem'>
                        <Image
                            src="/degree1.svg"
                            alt="University Degree
                            Marine Engineering"
                            width={47}
                            height={47}
                            
                        />
                        <div>
                        University Degree Mechanical Engineering
                        </div>
                    </div>
                    {/* <div className='about__founder-degreesItem'>
                        <Image
                            src="/degree2.svg"
                            alt="Master’s Degree
                            Composites Engineering"
                            width={47}
                            height={47}
                            
                        />
                        <div>
                        Master’s Degree Composites Engineering
                        </div>
                    </div>
                    <div className='about__founder-degreesItem'>
                        <Image
                            src="/title1.svg"
                            alt="Doctor of Philosophy
                            Bio Composites"
                            width={47}
                            height={47}
                            
                        />
                        <div>
                            PhD Degree Bio Composites Engineering
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className='about__gallery'>
            <Image
                className='about__gallery-img'
                src="/about1.png"
                alt="about1"
                width={47}
                height={47}
            />
            <Image
                className='about__gallery-img'
                src="/about2.png"
                alt="about2"
                width={47}
                height={47}
            />
            <Image
                className='about__gallery-img'
                src="/about3.png"
                alt="about3"
                width={47}
                height={47}
            />
        </div>
        <div className='about__offer'>
            <div className='about__offer-title'>COMMANTECH - can offer this by</div>
            <div className='about__offer-text'>Having a strong technical background supporting it with the collaboration of a vast community of researchers and experienced engineers in the composite materials sector;</div>
            <div className='about__offer-text'>Having a deep understanding of the composites industry, including current trends, market dynamics, and regulatory requirements;</div>
            <div className='about__offer-text'>Solving complex technical problems related to composite materials and manufacturing processes by a combination of analytical thinking, creativity and practical experience;</div>
            <div className='about__offer-text'>Communicating technical concepts and solutions clearly and effectively to clients with varying levels of technical expertise. Also working collaboratively with clients to develop solutions that meet their specific needs.</div>
        </div>
        {/* <div className="">
            <h2>COMMANTECH</h2>
            <br/>
            <p>The use of new renewable composite materials helps to counterbalance the extensive use of petroleum-based polymers used today. Hence, the industry is investing too much effort on applying them in their products.</p>
            <br/>
            <p>We focus on linking these new market trends with the marine industry. Therefore, the main purpose of COMMANTECH is to provide the necessary elements you need in your shipyard to learn how to manufacture and take control of new composite materials and why not to develop a specific one to your requirements.</p>
            <br/>
            <h3>COMMANTECH can offer this by</h3>
            <ul className={styles.list}>
                <li>Having a strong technical background supporting it with the collaboration of a vast community of researchers and experienced engineers in the composite materials sector.</li>
                <li>Having a deep understanding of the composites industry, including current trends, market dynamics, and regulatory requirements.</li>
                <li> Solving complex technical problems related to composite materials and manufacturing processes by a combination of analytical thinking, creativity and practical experience.</li>
                <li>Communicating technical concepts and solutions clearly and effectively to clients with varying levels of technical expertise. Also working collaboratively with clients to develop solutions that meet their specific needs</li>
            </ul>
        </div>
        <div className={styles.rightPanel}>
            <div className={styles.aboutBox}>
                <h4>About the founder</h4>
                <p>
                    <Image
                        className={styles.founder}
                        src="/franco.png"
                        alt="Franco Armanasco"
                        width={170}
                        height={170}
                        priority
                    />
                    <strong>Franco Armanasco</strong>, founder of <strong>COMMANTECH</strong>, was born in Argentina. He has obtained a Degree in Marine Engineering in Buenos Aires. After graduating, he began his career working as a structural composite designer for the sailing and motor yacht industry, participating in the development of sailing yachts from 30 ft to 100 ft constructed in Italy and Argentina. His passion in yacht building has motivated him to get more involved into composites manufacturing technologies. In 2019 he obtained a Master’s degree in composites engineering with a project thesis based on rheo-kinetics studies of novel bio-based polyurethane resins. He has developed manufacturing improvements of yacht buildings in Argentina, applying specific software and finding out the best products available in the market. In 2020 he started a PhD in engineering with a deep research and development in flax/soy-based polyurethane prepregs and its application in ATL/AFP manufacturing technologies. In the meantime, he has been collaborating with a Canadian research center dedicating his time in developing novel bio-sourced composite materials. 
                </p>
            </div>
        </div> */}
    </div>
  )
}

export default AboutPage