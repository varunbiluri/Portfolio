import styled from "@emotion/styled";

export const ImpactWrapper = styled.section`
  background: #f4f8f6;
  padding: 4rem 0 2rem;
`;

export const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 1.35fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const NarrativePanel = styled.div`
  position: sticky;
  top: 2rem;

  @media (max-width: 900px) {
    position: static;
  }

  h2 {
    color: #151418;
    font-size: 2.35rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 1rem;
  }

  p {
    color: #3f4a47;
    font-size: 1rem;
    line-height: 1.75;
    max-width: 560px;
  }
`;

export const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ProofCard = styled.div`
  background: #fff;
  border: 1px solid #dbe7e2;
  border-radius: 8px;
  min-height: 220px;
  padding: 1.25rem;
  box-shadow: 0 16px 40px rgba(21, 20, 24, 0.06);

  span {
    color: #14b87a;
    display: block;
    font-size: 0.78rem;
    font-weight: 800;
    margin-bottom: 0.8rem;
    text-transform: uppercase;
  }

  h3 {
    color: #151418;
    font-size: 1.15rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 0.65rem;
  }

  p {
    color: #4f5b57;
    font-size: 0.92rem;
    line-height: 1.65;
  }
`;

export const SystemsStrip = styled.div`
  border-top: 1px solid #dbe7e2;
  border-bottom: 1px solid #dbe7e2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const SystemMetric = styled.div`
  padding: 1.25rem;

  & + & {
    border-left: 1px solid #dbe7e2;
  }

  @media (max-width: 800px) {
    border-left: 0;
    border-top: 1px solid #dbe7e2;
  }

  strong {
    color: #151418;
    display: block;
    font-size: 1.4rem;
    font-weight: 800;
  }

  span {
    color: #56615e;
    display: block;
    font-size: 0.86rem;
    line-height: 1.45;
    margin-top: 0.35rem;
  }
`;
