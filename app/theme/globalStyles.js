import { createGlobalStyle } from 'styled-components';
import fonts from 'theme/fonts';

const GlobalStyle = createGlobalStyle`

  ${fonts()}

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
    font-family: 'Daimler CS', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Daimler CS', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Daimler CS', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'CorporateACyr', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  img {
    width: 100%;
    height: auto;
  }

  ::placeholder {
    color: #949494;
  }

  .ant-message .anticon {
    && {
      top: 0;
    }
  }

  .ant-message-custom-content {
    && {
      display: inline-flex;
      align-items: center;
    }
  }

`;

export default GlobalStyle;
