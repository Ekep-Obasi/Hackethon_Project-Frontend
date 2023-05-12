import styled from "@emotion/styled";

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  width: 50%;
  height: 40px;
  background-color: lightgray;
  border-radius: 12px;

  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      height: 30px;
      width: 30px;
    }

    a {
      font-size: 12px;
    }
  }

  button {
    display: flex;
    height: 100%;
    padding: 0;
    justify-content: center;
    align-items: center;
    border-style: none;
    background-color: transparent;
    font-size: 35px;

    &:focus {
      outline: none;
    }
  }
`;

export { StyledLink };
