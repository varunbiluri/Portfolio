import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: -2rem;
  gap: 0.75rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 126px;
  margin-bottom: 1rem;
  background: #f4f8f6;
  border: 1px solid #dcebe5;
  border-radius: 8px;
  padding: 0.6rem 0.75rem;
`;

export const TechImg = styled.img`
  height: 28px;
  width: 28px;
  margin-right: 0.5rem;
`;

export const TechName = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceCard = styled.div`
  border-left: 3px solid #14b87a;
  background: #f7fbf9;
  border-radius: 8px;
  padding: 1.1rem;

  h3 {
    color: #151418;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  span {
    color: #4f5b57;
    display: block;
    font-size: 0.82rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  p {
    color: #26332f;
    font-size: 0.92rem;
    line-height: 1.55;
  }
`;
