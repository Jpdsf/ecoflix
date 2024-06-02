import styled from 'styled-components';

export const StyledContact = styled.div`
  padding: 0px;

  .content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 20px;
    }

    form {
      display: grid;
      grid-gap: 10px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 5px;
    }

    input,
    textarea {
      padding: 8px;
      font-size: 1em;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      font-size: 1em;
      border: none;
      border-radius: 5px;
      background-color: #1b5e20;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #388e3c;
    }
  }
`;