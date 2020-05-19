import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html > body {
    height: auto;
    width: auto;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  img {
    width: 100%;
    height: auto;
  }

  ::placeholder {
    color: #949494;
  }
`;

export default GlobalStyle;
