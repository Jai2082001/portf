import styles from "./page.module.css";
import Image1 from './images/ontario_public_service_leadership_logo-removebg-preview.png';
import Image2 from './images/mtb.png'
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page1}>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.mainSubDiv}>
            <div>
              Jaideep Grover
            </div>
            <div>
              <ul>
                <li>Programming</li>
                <li>Cloud</li>
                <li>Personal</li>
              </ul>
            </div>
          </div>
          <div className={styles.content}>
            <p> Hi, I'm Jaideep Grover, a passionate full-stack developer with hands-on experience in building and deploying applications. I have successfully self-deployed multiple projects, utilizing both front-end and back-end technologies. Along with my technical skills, I hold certifications like AZ-900 and AZ-204, showcasing my understanding of cloud platforms like AWS and Azure. Currently, I am expanding my expertise by preparing for the VCP-Data Center Virtualization certification, aiming to deepen my knowledge in cloud infrastructure and virtualization.
            </p>
          </div>
        </main>
        <div className={styles.projectDiv}>
          Projects
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.container}>

          </div>
          <div className={styles.container}>

          </div>
          <div className={styles.container}>

          </div>
          <div className={styles.container}>

          </div>
        </div>
        <div className={styles.experience}>
          <h2>Experience</h2>
          <div>
            <div className={styles.subexperience}>
              <div className={styles.imageContainer}>
                <Image alt='exp1' src={Image1} width={80}></Image>
                Operator Analyst (Co-op)
              </div>
              <div className={styles.expPoints}>
                <ul>
                  <li>Enhanced professional communication and developed relationships by leveraging teams and outlook, leading to a 20% increase in cross-departmental collaboration.</li>

                  <li>Automated the manual process of certificate renewal using Power Automate, reducing the time required by 50% and improving compliance.</li>

                  <li>Developed an internal notice board portal integrated with the department website, ensuring timely dissemination of information using NodeJS, reaching over 300 employees.</li>

                  <li>Developed a Python script to automate regular inter-departmental communication reports, reducing manual workload by 40% and significantly increasing efficiency.</li>

                </ul>
              </div>
            </div>
            <div className={styles.subexperience}>
              <div className={styles.imageContainer}>
                <Image alt='exp1' src={Image2} width={80}></Image>
                Junior Software Developer
              </div>
              <div className={styles.expPoints}>
                <ul>
                  <li>Collaborated with senior workers to streamline productivity within the organization by developing email message system, reduced communication time by 20%, using ASP.Net and C#.</li>
                  <li>Mentored and trained a cohort of 5 interns, enhancing their debugging skills and code documentation proficiency, resulting in improvement in code quality and efficiency.</li>
                  <li>Spearheaded the development and successful launch of 8 fully functional websites for local businesses, applying expert web development skills, like NodeJs, ReactJs, NextJs ; to elevate their online presence and engagement.</li>
                  <li>Seamlessly integrated 7 third-party APIs into senior-level projects, enhancing functionality and data access while ensuring system reliability. Pioneered the development of 12 reusable components, streamlining development processes, and promoting code efficiency.</li>


                </ul>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.education}>

          <h3 style={{ marginBottom: '40px' }}>Skills and Certifications</h3>
          <div className={styles.skillsDiv}>
            <div className={styles.skillDiv}>
              <h3>Programming Languages</h3>
              <ul>
                <li>Javascript</li><li> Java</li> <li>C</li> <li>C++</li> <li>Python</li><li> Typescript</li></ul>
            </div>
            <div className={styles.skillDiv}>
              <h3>Databases</h3>
              <ul>
                <li>MySql</li>
                <li>PostgreSql</li>
                <li>MongoDB</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className={styles.skillDiv}>
              <h3>Frameworks</h3>
              <ul><li>NextJs</li> <li>ReactJS</li></ul>
            </div>
            <div className={styles.skillDiv}>
              <h3>Additional Skills</h3>
              <ul><li>Monorepos</li> <li>Containerization(Docker, Kubernets)</li> <li>REST API</li> <li>WebSockets</li> <li>PubSub</li> <li>Github</li><li>Github Actions</li></ul>
            </div>
            <div className={styles.skillDiv}>
              <h3>Certifications</h3>
              <ul>
                <li>Microsoft AZ-104, Azure Adminsitrator Associate</li>
                <li>Microsoft AZ-204, Azure Developer Associate</li>
                <li>Vir</li>
                <li>WebSockets</li>
                <li>PubSub</li>
                <li>Github</li>
                <li>Github Actions</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
