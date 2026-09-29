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
              <Eyebrow>AI/ML Engineer - Agentic AI - Voice AI</Eyebrow>
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
                    'I build production-grade AI workflows.',
                    1000,
                    'I ship agentic systems for data reliability.',
                    1000,
                    'I design multilingual voice AI for healthcare.',
                    1000,
                    'I fine-tune, evaluate, and deploy LLM pipelines.',
                    1000,
                    'I turn ML experiments into reliable products.',
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
                Software engineer focused on agentic AI systems, multilingual conversational AI,
                RAG pipelines, speech AI, and MLOps. I work across Python, Java, PyTorch,
                LangChain, LangGraph, FastAPI, Airflow, Snowflake, PostgreSQL, and cloud AI
                services to build scalable production workflows.
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
                  <span>MTTR reduction with AI incident routing</span>
                </StatCard>
                <StatCard>
                  <strong>4+</strong>
                  <span>Low-resource languages in voice AI systems</span>
                </StatCard>
                <StatCard>
                  <strong>200k+</strong>
                  <span>CodeKaze participant pool, rank 1973</span>
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
