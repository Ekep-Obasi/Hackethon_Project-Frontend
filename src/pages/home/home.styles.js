import styled from "@emotion/styled";

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #fff;
  position: relative;
`;

const FormWrapprer = styled.form`
  width: 100%;

  h1,
  p {
    text-align: center;
    position: absolute;
    color: #2c387e;
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    top: 19px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  p {
    margin: 0;
    font-weight: 400;
    top: 75px;
    color: #ffc400;
  }

  .box {
    height: ${({ state }) => (state !== 0 ? "250px" : "0px")};
    transition: 0.5s linear height;
    width: 41%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    margin: 5px auto;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
    background-image: ${({ img }) => img && `url(${img})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    a {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 0;
      color: ${({ state }) => (!state ? "#fff" : "hidden")};
      visibility: ${({ state }) => (!state ? "visible" : "hidden")};
      transition: 0.3s ease-in visibility;
      transition: 0.3s ease-in color;
    }
  }

  .input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      height: 47px;
      border-style: none;
      border-radius: 0 12px 12px 0;
      background-color: #3f51b5;
      color: #fff;

      &:focus {
        outline: none;
      }
    }
  }
`;

const StyledInput = styled.input`
  height: 47px;
  padding: 0 12px;
  width: 35%;
  border-radius: 12px 0 0 12px;
  border-style: none;
  box-sizing: border-box;
  border: 2px solid #3f51b5;

  &:focus {
    outline: none;
  }
`;

export { FormWrapprer, StyledInput, HomeStyles };
