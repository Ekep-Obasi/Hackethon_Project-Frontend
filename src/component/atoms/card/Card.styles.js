import styled from "@emotion/styled";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  min-width: 250px;
  padding: 12px;
  text-align: center;
  font-family: "Roboto", sans-serif;

  .icon {
    font-size: 42px;
  }

  .name {
    font-weight: 600;
  }

  .description {
    font-size: 14px;
  }
`;

const StyledCardWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;
`;

export { StyledCard, StyledCardWrapper };
