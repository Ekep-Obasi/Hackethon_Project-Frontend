import styled from "@emotion/styled";

const StyledDescription = styled.div`
  width: 100%;
  background-color: #f5f7f8;
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: center;
  padding: 35px 0;

  p {
    width: 50%;
    min-width: 300px;
    font-size: 12px;
    text-align: center;
  }

  button {
    height: 47px;
    border-style: none;
    border-radius: 12px;
    background-color: #2281c2;
    color: #fff;
    scale: 0.8;

    a {
      text-decoration: none;
      color: #fff;
    }

    &:focus {
      outline: none;
    }
  }
`;

const StyledHero = styled.div`
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  p {
    width: 50%;
    min-width: 300px;
    font-size: 12px;
    text-align: center;
  }
`;

export { StyledDescription, StyledHero };
