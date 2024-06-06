
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
=======
import { styled } from '@stitches/react';

export const StyledContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 8vh)', // Altura da tela menos a altura do header
    backgroundColor: '#f0f0f0',
    padding: '20px',
    marginTop: '19vh', // Margem superior para o header
  });
  

export const StyledSearchForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
  '& > input': {
    marginBottom: '10px',
    padding: '10px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
});

export const StyledResultsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
});

export const StyledResultItem = styled('div', {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '10px',
  width: '300px',
  textAlign: 'center',
});

export const StyledButton = styled('button', {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

