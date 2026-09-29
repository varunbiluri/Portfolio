import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 0;
  margin-bottom: 2rem;
  grid-template-columns: 1fr;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #dbe7e2;
  background: #fff;
  box-shadow: 0 16px 42px rgba(21, 20, 24, 0.08);
  @media (min-width: 992px) {
    grid-template-columns: 0.9fr 1.1fr;
    border-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  width: 100%;
  background: #ecf5f1;
  img {
    width: 100%;
    height: 100%;
    min-height: 260px;
    object-fit: cover;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  h4 {
    color: #151418;
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 1.25;
  }

  p {
    font-weight: 400;
    max-width: 100%;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: #3f4a47;
    text-align: left;
    line-height: 1.65;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const BtnGroup = styled.div`
  min-height: 58px;
  display: flex;
  align-items: center;
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const TechCard = styled.div`
  border-radius: 8px;
  background-color: #eef8f3;
  border: 1px solid #d7eee3;
  padding: 6px 10px;
  margin: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: #17624a;
  cursor: default;
`;
