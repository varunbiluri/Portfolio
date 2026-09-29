import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  ExperienceGrid,
  ExperienceCard,
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
            Hello! My name is <strong>Varun Billuri</strong>. I am an AI/ML engineer building agentic AI systems, multilingual conversational AI platforms, and production ML workflows across healthcare, analytics, and data reliability use cases.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My work sits at the intersection of LLM orchestration, RAG, speech AI, MLOps, and backend systems. I enjoy taking ideas from rough experiments to reliable services: data preparation, model evaluation, inference pipelines, observability, API design, and deployment.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Recently, I have worked on multilingual healthcare voice AI at Worldish and agentic incident-response systems at ThoughtSpot. I care about practical AI: systems that are measurable, scalable, latency-aware, and safe enough to run in production.
              <div className="tagline2">
                Current focus areas and technologies:
              </div>
            </ScrollAnimation>

            <ExperienceGrid>
              <ScrollAnimation animateIn="fadeInUp">
                <ExperienceCard>
                  <h3>Worldish - Software Engineer</h3>
                  <span>Dec 2025 - Present</span>
                  <p>
                    Leading AI/ML feature development for multilingual healthcare systems, rare-language fine-tuning workflows, provider benchmarking, and real-time STT/TTS voice pipelines.
                  </p>
                </ExperienceCard>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp">
                <ExperienceCard>
                  <h3>ThoughtSpot - MTS 2</h3>
                  <span>Jan 2025 - Dec 2025</span>
                  <p>
                    Built LangChain and LangGraph agents for Airflow triage, LLM log summaries, anomaly detection, Slack alerts, Jira automation, and safer remediation workflows.
                  </p>
                </ExperienceCard>
              </ScrollAnimation>
            </ExperienceGrid>
            

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
