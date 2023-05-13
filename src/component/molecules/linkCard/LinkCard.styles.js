import styled from "@emotion/styled";

const StyledLinkCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 45%;
  min-width: 300px;
  height: fit-content;
  max-height: 150px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 12px;
  margin: 10px 0;

  .link-info {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    text-align: left;

    h2 {
      font-size: 14px;
      width: 100%;
    }

    p {
      font-weight: 600;
      font-size: 12px;
      color: #5a5a5a;
    }

    .link {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        height: 25px;
        width: 25px;
      }

      a {
        font-size: 10px;
      }
    }
  }

  .link-image {
    background-image: ${({ img }) => img && `url(${img})`};
    border: 1px solid lightgray;
    border-radius: 6px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 40%;
    min-width: 125px;
  }
`;

export { StyledLinkCardWrapper };
