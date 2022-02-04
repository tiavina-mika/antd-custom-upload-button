const COLOR_PRIMARY = '#140F4B';
const COLOR_ACTIVE = '#170F5F';
const LIGHT_BLUE = '#ECE9FB';

const theme = {
  colors: {
    primary: COLOR_PRIMARY,
    dark: '#000',
    lightDark: '#7A7A7A',
    white: '#fff',
    alert: '#ff7676',
    active: COLOR_ACTIVE,
    gray: '#d8d8d8',
    darkGray: '#C4C4C4',
    primaryLight: '#F0F1FB',
    lightWhite: '#f5f5f5',
    transparentPrimary: '#1b28377a',
    lightShadow: 'rgba(67,67,67,0.5)',
    pinkLightShadow: 'rgba(255,117,115,0.5)',
    pink: '#FF7676',
    lightBlue: LIGHT_BLUE,
    middleGray: 'rgba(184,184,184,0.5)',
    bombay: '#B6BCC3',
    boulder: 'rgba(124,124,124,0.5)',
    mercury: '#E3E3E3',
    alto: 'rgba(221,221,221,0.5)',
    dustyGray: '#979797',
    mineShaft: ' rgba(60, 60, 60, 0.5)',
    successPrimary: '#CCDACC',
    successSecondary: '#EDF7ED',
    infoPrimary: '#3B6382',
    infoSecondary: '#E8F4FD',
    warningPrimary: '#FFF4E5',
    warningSecondary: '#9C7D51',
    errorPrimary: '#8B544F',
    errorSecondary: '#FDECEA',
  },
  fonts: {
    primary: 'AvenirNextWorld, sans-serif',
    secondary: 'Montserrat, sans-serif',
  },
  body: {
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    borderRadius: '100px',
    fontSize: '15px',
    fontWeight: 600,
    padding: '20px 24px',
    primary: {
      backgroundColor: LIGHT_BLUE,
      color: `${COLOR_PRIMARY} !important`,
    },
    active: {
      backgroundColor: '#1010EB',
      color: '#fff !important',
    },
    disabled: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: '#fff !important',
    },
  },
  modal: {
    borderRadius: 24,
    padding: '20px 20px 20px 20px',
    body: {
      padding: '0 0 10px 0',
      margin: '15px 0 10px 0',
    },
  },
  spacing: (spacing) => spacing * 6,
  typography: {
    h1: {
      desktop: {
        fontSize: 40,
      },
    },
    h2: {
      desktop: {
        fontSize: 33,
      },
    },
    h3: {
      desktop: {
        fontSize: 26,
      },
    },
    h4: {
      desktop: {
        fontSize: 24,
      },
    },
    h5: {
      desktop: {
        fontSize: 22,
      },
    },
  },
};

export default theme;
