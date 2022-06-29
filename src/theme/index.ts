export const theme = {
  colors: {
    text: '#FFFFFF',
    background: '#14142B',
    backgroundLight: '#312E42',
    primary: '#0CF8E9',
    secondary: '#858E97',
    error: '#E24545'
  },
  fonts: {
    regular: 'Poppins',
    bold: 'Poppins-SemiBold',
    medium: 'Poppins-Medium'
  }
}

const screenSizes = {
  mobile: '768px',
  tablet: '1024px',
};

export const devices = {
  mobile: `(max-width: ${screenSizes.mobile})`,
  tablet: `(max-width: ${screenSizes.tablet})`,
};