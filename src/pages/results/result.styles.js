import styled from "@emotion/styled";

const StyledResult = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "Roboto", sans-serif;
    color: #213547;
  }

  .box {
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledSocialButtons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  #whatsapp {
    background-color: #25d366;
    color: #fff;
  }

  #twitter {
    color: #1da1f2;
  }

  #linkedin {
    color: #0072b1;
  }

  #facebook {
    color: #4267b2;
  }

  button {
    font-size: 22px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    &:focus,
    &:hover {
      border-color: transparent;
      outline: none;
    }
  }
`;

export { StyledResult, StyledSocialButtons };
