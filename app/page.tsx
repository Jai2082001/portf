import styles from "./page.module.css";


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
          Experience
          <div>
            <div>
              Image
            </div>
            <div>
              Content
            </div>

            <div>
              Image
            </div>
            <div>
              Content
            </div>

            <div>
              Image
            </div>
            <div>
              Content
            </div>
          </div>
        </div>
        <div className={styles.education}>
          Education

          <div>
            <div>
          
            </div>
            <div>

            </div>
          </div>
          <div>

          </div>
          <div>

          </div>
          <div>
            <div>

            </div>
            <div>

            </div>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  );
}
