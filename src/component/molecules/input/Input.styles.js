import styled from "@emotion/styled";

const StyledInput = styled.input`
  height: 42px;
  padding: 0 12px;
  width: 35%;
  min-width: 300px;
  border-radius: 12px 0 0 12px;
  border-style: none;
  box-sizing: border-box;
  font-size: 12px;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 520px) {
    min-width: 225px;
  }
`;
const StyledInputWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    height: 42px;
    border-style: none;
    border-radius: 0 12px 12px 0;
    background-color: #2281c2;
    color: #fff;
    padding: 0 1.2rem;

    &:focus {
      outline: none;
    }
  }
`;

export { StyledInput, StyledInputWrapper };
