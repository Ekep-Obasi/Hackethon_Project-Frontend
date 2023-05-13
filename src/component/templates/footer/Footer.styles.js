import styled from "@emotion/styled";

const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15% 20px 15%;
  background-color: #2c3e50;
  font-size: 13px;
  color: white;

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px 0;
  }

  p {
    margin: auto;
    text-align: center;
    padding-top: 25px;
  }
`;

const StyledMediaHandle = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100px;

  a {
    font-size: 28px;
  }

  span {
    color: #fff;
    font-size: 12px;
  }
`;

export { StyledFooter, StyledMediaHandle };
