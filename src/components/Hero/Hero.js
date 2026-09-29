import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
  Eyebrow,
  HeroActions,
  StatGrid,
  StatCard,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <Eyebrow>AI/ML Systems Engineer - Agentic AI - Multilingual Voice AI</Eyebrow>
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Varun Billuri.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'I architect production-grade AI systems.',
                    1000,
                    'I turn unreliable AI experiments into durable platforms.',
                    1000,
                    'I build multilingual voice AI for real-world healthcare.',
                    1000,
                    'I own the path from model evaluation to deployment.',
                    1000,
                    'I design systems that survive production pressure.',
                    300,
                    () => setShowScrollDown(true),
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
              <p>
                I build AI platforms where LLM reasoning, speech systems, data orchestration,
                model evaluation, and backend reliability meet. My work spans agentic incident
                response, low-resource language AI, healthcare voice pipelines, RAG, fine-tuning,
                and MLOps across Python, PyTorch, LangChain, LangGraph, FastAPI, Airflow,
                Snowflake, PostgreSQL, AWS, Azure, and GCP.
              </p>
              <HeroActions>
                <a className="btn PrimaryBtn btn-shadow" href="#projects">
                  View Projects
                </a>
                <a
                  className="btn SecondaryBtn hero-secondary"
                  href="/Billuri_Varun_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </HeroActions>
              <StatGrid>
                <StatCard>
                  <strong>60%</strong>
                  <span>MTTR reduction through agentic incident workflows</span>
                </StatCard>
                <StatCard>
                  <strong>Multilingual</strong>
                  <span>Voice AI across Tigrinya, Wolof, Bambara, and Arabic dialects</span>
                </StatCard>
                <StatCard>
                  <strong>End-to-end</strong>
                  <span>Dataset prep, training, evaluation, deployment, and observability</span>
                </StatCard>
              </StatGrid>
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/main_frame.svg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
