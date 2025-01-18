import { Container } from '@mui/material'
import './App.css'
import Header from './components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway", "serif",
    ].join(','),
  },
});




function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Header />
      </Container>
    </ThemeProvider>
  )
}

export default App
