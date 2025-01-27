import styled from "styled-components";

const ErrorBoundryFallbackContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  a {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color};
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    border-radius: 5px;
  }
`;

export default ErrorBoundryFallbackContainer;
