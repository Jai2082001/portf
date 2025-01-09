'use client'

import styles from "./page.module.css";
import Image1 from './images/ontario_public_service_leadership_logo-removebg-preview.png';
import Image2 from './images/mtb.png'
import Image from "next/image";
import GithubIcon from './images/github.png';
import LinkIcon from './images/link.png'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Badge from './images/badge.png'
const phrases = ['Developer', 'Designer', 'Me'];

export default function Home() {
  const [text, setText] = useState(phrases[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Function to start the auto-slide
  const startSlide = () => {
    // @ts-ignore
    intervalRef.current = setInterval(() => {
      if (sliderRef.current) {
        // @ts-ignore
        if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth) {
          // @ts-ignore
          sliderRef.current.scrollLeft = 0; // Reset to the first slide
        } else {
          // @ts-ignore
          sliderRef.current.scrollBy({
            // @ts-ignore
            left: sliderRef.current.clientWidth,
            behavior: 'smooth',
          });
        }
      }
    }, 2000); // Slide every 3 seconds
  };

  // Function to stop the auto-slide
  const stopSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startSlide(); // Start sliding when the component mounts
    return () => stopSlide(); // Stop sliding when the component unmounts
  }, []);

  // Event handlers to handle hover effect
  const handleMouseEnter = () => {
    setIsHovered(true);
    stopSlide();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startSlide();
  };

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      scrambleText(phrases[currentIndex]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const scrambleText = (nextPhrase: string) => {
    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = 10;

    const intervalId = setInterval(() => {
      setText(prevText =>
        prevText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return nextPhrase[index];
            }
            return String.fromCharCode(65 + Math.floor(Math.random() * 26));
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(intervalId);
        setText(nextPhrase);
        setIsScrambling(false);
      }

      iteration += 1;
    }, 50);
  }

  return (
    <div className={styles.page1}>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.mainSubDiv}>
            <div>
              <span className={`${isScrambling ? styles.text1 : ''}`}>{text}</span>
            </div>
            <div>
              <ul>
                {/* <li>Programming</li>
                <li>Cloud</li>
                <li>Personal</li> */}
              </ul>
            </div>
          </div>
          <div className={styles.content}>
            <p> Hi, I'm Jaideep Grover, a passionate full-stack developer with hands-on experience in building and deploying applications. I have successfully self-deployed multiple projects, utilizing both front-end and back-end technologies. Along with my technical skills, I hold certifications like AZ-900, AZ-204, and AWS Certified Solutions Architect, showcasing my understanding of cloud platforms like AWS and Azure. Currently, I am expanding my expertise by learning machine learning, aiming to enhance my skill set in AI and data-driven solutions.
            </p>
            <Image src={Badge} alt="badge"></Image>
          </div>
        </main>
        <div className={styles.projectDiv}>
          <h2 style={{fontSize: '2rem'}}>Projects</h2>
        </div>
        <div className={styles.projectContainer}>
          <div className={styles.container}>
            <div className={styles.containerImage}>
              <p style={{ marginBottom: '10px' }}>Checkout the Code and the Product</p>
              <div className={styles.containerLink}>

                <Link href={'https://github.com/Jai2082001/ai-stylist'}> <Image src={GithubIcon} width={50} alt="gitimage"></Image></Link>

                <Link href={'https://ai-stylist-umber.vercel.app/'}><Image src={LinkIcon} width={50} alt="gitimage"></Image></Link>
              </div>
            </div>
            <div className={styles.containerText}>
              The Fashion Assistant App is your personal style companion! It analyzes your wardrobe to recommend perfect outfit combinations using simple color harmony formulas. By scanning your face, it suggests the best hairstyles and lenses tailored to your features. You can even try hairstyles and lenses in real-time, offering a sneak peek into your transformed look. While the real-time try-on feature is still under development, the app already serves as a powerful tool to elevate your fashion game effortlessly.
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.containerImage}>
              <p style={{ marginBottom: '10px' }}>Checkout the Code and the Product</p>
              <div className={styles.containerLink}>

                <Link href={'https://github.com/Jai2082001/restaurant-cms'}> <Image src={GithubIcon} width={50} alt="gitimage"></Image></Link>

                <Link href={'https://restaurant-capstone-1.netlify.app/'}><Image src={LinkIcon} width={50} alt="gitimage"></Image></Link>
              </div>
            </div>
            <div className={styles.containerText}>
              The Restaurant CMS is a cloud-based management system built with Terraform and hosted on GCP, designed to empower restaurants with their own fully managed websites, including independent frontends and backends. Each site comes with automatic DNS management, streamlining deployment and scalability. Key features include payment integration, social media control (Twitter), and email promotions via SendGrid, all managed through a super admin portal. This solution simplifies operations while providing robust tools to enhance customer engagement and digital presence.
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.containerImage}>
              <p style={{ marginBottom: '10px' }}>Checkout the Code and the Product</p>
              <div className={styles.containerLink}>

                <Link href={'https://github.com/Jai2082001/homecarefront'}> <Image src={GithubIcon} width={50} alt="gitimage"></Image></Link>

                <Link href={'https://homecarefront.vercel.app'}><Image src={LinkIcon} width={50} alt="gitimage"></Image></Link>
              </div>
            </div>
            <div className={styles.containerText}>
              The NGO Shelter Website is a community-driven platform built using the MEAN stack, aimed at supporting homeless shelters and those in need. Shelters can easily register themselves, making it simpler for the community to guide homeless individuals to safe spaces. The platform also consolidates essential government resources, offering access to food, healthcare, and support services under one roof. This initiative fosters collaboration and compassion, creating a streamlined system to help those in need more effectively.
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.containerImage}>
              <p style={{ marginBottom: '10px' }}>Checkout the Code and the Product</p>
              <div className={styles.containerLink}>

                <Link href={'https://github.com/Jai2082001/homecarefront'}> <Image src={GithubIcon} width={50} alt="gitimage"></Image></Link>

                <Link href={'https://homecarefront.vercel.app/'}><Image src={LinkIcon} width={50} alt="gitimage"></Image></Link>
              </div>
            </div>
            <div className={styles.containerText}>
              The Freelance E-Commerce Website is a streamlined platform designed to simplify online shopping and order fulfillment. With Stripe payment integration, it ensures secure and seamless transactions, while the Shiprocket API manages logistics for efficient and reliable delivery. The website accumulates orders, providing a centralized system for tracking and processing, making it an intuitive and hassle-free solution for both sellers and buyers.
            </div>
          </div>

        </div>
        <div className={styles.experience}>
          <h2 style={{fontSize: '2rem'}}>Experience</h2>
          <div className={styles.subexperience}>
            <div className={styles.imageContainer}>
              <Image alt='exp1' src={Image1} width={80} height={80} />
              <p>Operator Analyst (Co-op)</p>
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
              <Image alt='exp2' src={Image2} width={80} height={80} />
              <p>Junior Software Developer</p>
            </div>
            <div className={styles.expPoints}>
              <ul>
                <li>Collaborated with senior workers to streamline productivity within the organization by developing an email messaging system, reducing communication time by 20%, using ASP.Net and C#.</li>
                <li>Mentored and trained a cohort of 5 interns, enhancing their debugging skills and code documentation proficiency, resulting in improvement in code quality and efficiency.</li>
                <li>Spearheaded the development and successful launch of 8 fully functional websites for local businesses, applying expert web development skills to elevate their online presence and engagement.</li>
                <li>Seamlessly integrated 7 third-party APIs into senior-level projects, enhancing functionality and data access while ensuring system reliability. Pioneered the development of 12 reusable components, streamlining development processes, and promoting code efficiency.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.education}>
          <h3 className={styles.skillsTitle}>Skills and Certifications</h3>
          <div className={styles.skillsContainer}>
            <div
              className={`${styles.skillsSlider} ${isHovered ? styles.paused : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={sliderRef}
            >

              <div className={styles.skillCard}>
                <h4 className={styles.skillHeading}>Education</h4>
                <ul className={styles.skillList}>
                  <li>Bachelors in Computer Applications</li>
                  <li>Post Grad. Diploma in Computer Application Development</li>
                  <li>Post Grad. Diploma in Virtualization and Cloud Computing</li>
                </ul>
              </div>
              <div className={styles.skillCard}>
                <h4 className={styles.skillHeading}>Programming Languages</h4>
                <ul className={styles.skillList}>
                  <li>Javascript</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>Python</li>
                  <li>Typescript</li>
                </ul>
              </div>
              <div className={styles.skillCard}>
                <h4 className={styles.skillHeading}>Databases</h4>
                <ul className={styles.skillList}>
                  <li>MySQL</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className={styles.skillCard}>
                <h4 className={styles.skillHeading}>Frameworks</h4>
                <ul className={styles.skillList}>
                  <li>NextJs</li>
                  <li>ReactJS</li>
                </ul>
              </div>
              <div className={styles.skillCard}>
                <h4 className={styles.skillHeading}>Additional Skills</h4>
                <ul className={styles.skillList}>
                  <li>Monorepos</li>
                  <li>Containerization (Docker, Kubernetes)</li>
                  <li>REST API</li>
                  <li>WebSockets</li>
                  <li>PubSub</li>
                  <li>Github</li>
                  <li>Github Actions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact}>
            <h3 style={{fontSize: '2rem', margin: '10px 0px'}}>Contact Me</h3>
            <div className={styles.contactDiv}>
                <p><a href="mailto:jaideepgrover147@gmail.com">Email Me</a></p>
                <p><a href="https://tinyurl.com/JaideepMeeting">Calendly Link</a></p>
            </div>
        </div>
                  
      </div>
    </div>
  );
}
