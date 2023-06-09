import styles from './page.module.css'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className={styles.splitted}>
        <div className={styles.leftPanel}>
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
        </div>
    </div>
  )
}

export default AboutPage