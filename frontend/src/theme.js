import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Ensuring dark mode
    primary: {
      main: '#1e88e5', // Custom blue color
    },
    secondary: {
      main: '#f44336', // Custom red color for secondary actions
    },
    background: {
      default: '#121212', // Dark background color
      paper: '#1e1e1e',  // Darker paper background for cards and modals
    },
  },
  typography: {
    h4: {
      fontWeight: 600, // Making headers bold
      color: '#ffffff',
    },
    body1: {
      color: '#b0b0b0', // Subtle text color for paragraphs
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for buttons
          textTransform: 'none', // Disable uppercase text
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px', // Rounded corners for text fields
          },
        },
      },
    },
  },
});

export default theme;
