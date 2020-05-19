const size = {
  mobile: '576px',
  tablet: '768px',
  laptop: '992px',
  laptopM: '1200px',
  laptopL: '1600px',
};

// const size = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

export default {
  xs: `@media (max-width: ${size.mobile})`,
  sm: `@media (min-width: ${size.mobile})`,
  md: `@media (min-width: ${size.tablet})`,
  lg: `@media (min-width: ${size.laptop})`,
  xl: `@media (min-width: ${size.laptopM})`,
  xxl: `@media (min-width: ${size.laptopL})`,
};
