import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/main_frame.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Varun Billuri</strong>. I'm originally from India and have been passionate about technology from a young age. My educational journey in Computer Science and Engineering & Business Systems at Jawaharlal Nehru Technological University, Anantapur, provided me with a strong foundation in both technical and business aspects of technology.            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology has been driven by a strong passion for problem-solving and innovation. Throughout my studies, I engaged in several impactful projects, including the development of MediScan, a precision medical record digitization tool using OCR and LSTM, and a comprehensive movie recommender system. These projects honed my skills in Python, Java, machine learning, and web development.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Working collaboratively within a team towards a shared objective has been an incredibly rewarding experience for me. Leading the development of an interactive coding hub using the MERN stack not only improved my technical skills but also enhanced my ability to communicate and work effectively with diverse teams. I am eager to continue exploring exciting projects in the future, with a particular interest in AI/ML, web development, and data science.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
