export const theme = {
  colors: {
    text: '#FFFFFF',
    textGrey: '#9FA8B2',
    background: '#14142B',
    backgroundLight: '#312E42',
    backgroundDarker: '#262338',
    primary: '#0CF8E9',
    secondary: '#858E97',
    success: '#58C38E',
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