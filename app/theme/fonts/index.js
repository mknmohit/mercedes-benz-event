import CorporateACyr from './CorpA_Cyr_Regular_.ttf';
import CorporateACyrItalic from './CorpA_Cyr_Italic_.ttf';
import CorporateACyrBold from './CorpA_Cyr_Demi_.ttf';
import CorporateACyrBoldItalic from './CorpA_Cyr_Demi_Italic.ttf';
import DaimlerCS from './Daimler_CS_Regular_.ttf';

const fonts = () => `@font-face {
    font-family: 'CorporateACyr';
    src: url(${CorporateACyr}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'CorporateACyr';
    src: url(${CorporateACyrItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'CorporateACyr';
    src: url(${CorporateACyrBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'CorporateACyr';
    src: url(${CorporateACyrBoldItalic}) format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Daimler CS';
    src: url(${DaimlerCS}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }`;

export default fonts;
