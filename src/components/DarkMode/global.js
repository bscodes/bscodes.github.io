import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.15s linear;
  }

  .card-body {
      background: ${({ theme }) => theme.cardBody};
  }

  .card-text {
    color: ${({ theme }) => theme.cardText};
  }

  .social-button {
    color: ${({ theme }) => theme.socialButton};
  }
`;