import styled from 'styled-components';

export const StyledHome = styled.div`
  .hero {
    background-color: #1b5e20;
    color: #ffffff;
    padding: 100px 0;
    text-align: center;

    .hero-content {
      max-width: 800px;
      margin: 0 auto;

      h1 {
        font-size: 3em;
        margin-bottom: 20px;
      }

      p {
        font-size: 1.2em;
        margin-bottom: 30px;
      }
    }
  }
`;

export const Features = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px 0;
`;

export const Feature = styled.div`
  flex: 0 1 300px;
  text-align: center;
  margin-bottom: 30px;

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1em;
    color: #555;
  }
`;

export const GetStarted = styled.section`
  background-color: #e0f7e9;
  text-align: center;
  padding: 100px 0;

  h2 {
    font-size: 2em;
    margin-bottom: 30px;
  }

  p {
    font-size: 1.2em;
    margin-bottom: 50px;
  }
`;
