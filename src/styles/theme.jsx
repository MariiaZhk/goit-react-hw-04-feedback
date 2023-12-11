export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    gray: '#898888',
    blue: '#165bc2',
    hovers: '#21476d',
  },
  fontSizes: {
    small: '14px',
    medium: '20px',
    large: '36px',
    extraLarge: '54px',
  },

  fontWeights: {
    normal: '400',
    semiBold: '600',
    extraBold: '900',
  },

  borderRadius: {
    buttonBorder: '100px',
  },

  spacing: value => `${4 * value}px`,
});
