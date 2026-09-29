import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding-bottom: 3rem;
  padding-top: 3rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1120px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  min-height: 640px;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 4.25rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1.45rem;
    color: #9ee6c2;
    margin-bottom: 1rem;
    font-weight: 500;
    min-height: 2.5rem;
  }

  p {
    font-size: 1.05rem;
    color: #f6f6f6;
    opacity: 0.85;
    line-height: 1.7;
    max-width: 620px;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;

    h5 {
      min-height: 5rem;
    }

    h1 {
      font-size: 3rem;
    }
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 420px;
  width: auto;
  filter: drop-shadow(0 24px 42px rgba(0, 0, 0, 0.35));

  @media screen and (max-width: 768px) {
    height: 260px;
  }
`;

export const Eyebrow = styled.div`
  color: #9ee6c2;
  font-size: 0.82rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.5rem;
  max-width: 760px;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const StatCard = styled.div`
  border: 1px solid rgba(158, 230, 194, 0.22);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  min-height: 132px;
  padding: 1.1rem;

  strong {
    color: #f6f6f6;
    display: block;
    font-size: 1.22rem;
  }

  span {
    color: rgba(246, 246, 246, 0.68);
    display: block;
    font-size: 0.82rem;
    line-height: 1.4;
    margin-top: 0.25rem;
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
