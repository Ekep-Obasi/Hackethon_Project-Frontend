import styled from "@emotion/styled";

const StyledLinkCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  width: 50%;
  height: 110px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 12px;

  .link-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;

    p {
      font-weight: 600;
      color: #5a5a5a;
    }

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
  }

  .link-image {
    background-image: url("http://localhost:3000/images/screenshoot-1683843111963.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 40%;
  }
`;

export { StyledLinkCardWrapper };
