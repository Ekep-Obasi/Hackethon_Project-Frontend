import styled from "@emotion/styled";

const StyledTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10%;
  position: relative;

  .drawer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }

  .links {
    width: 50%;
    display: flex;
    justify-content: space-between;

    a {
      font-size: 14px;
      color: #2c3e50;

      &.active {
        color: gold;
      }
    }
  }

  .actions {
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 650px) {
    padding: 0 2.5%;

    .drawer {
      flex-direction: column;
      justify-content: start;
      position: fixed;
      background-color: #fff;
      top: 0;
      padding: 55px 0;
      width: 200px;
      right: ${({ status }) => (status ? `-350px` : `0px`)};
      transition: 0.5s right ease-in-out;
      height: 100vh;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      z-index: 1;
      text-align: center;

      .links {
        a {
          padding: 1rem 0;

          &.active {
            background-color: #2c3e50;
            color: #fff;
          }
        }
      }

      .actions {
        button {
          padding: 1rem 0;
          background-color: #fff;
        }
      }

      .links,
      .actions {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
    }
  }
`;

const StyledMenu = styled.button`
  display: flex;
  flex-direction: column;
  border-style: none;
  display: none;
  z-index: 0;

  &:focus {
    outline: none;
  }

  span {
    height: 3px;
    width: 22px;
    display: block;
    margin: 2px 0;
    background-color: #000;
    transform-origin: 35% 85%;
    transition: all 0.5s ease-in-out;
  }
  #first {
    transform: ${({ status }) => (status ? `rotate(deg)` : `rotate(45deg)`)};
  }

  #second {
    display: ${({ status }) => (status ? "block" : "none")};
  }

  #third {
    transform: ${({ status }) => (status ? `rotate(0deg)` : `rotate(-45deg)`)};
  }

  @media screen and (max-width: 650px) {
    display: block;
    z-index: 1;
    position: fixed;
    right: 0;
    margin: 0 15px;
  }
`;

export { StyledTopBar, StyledMenu };
