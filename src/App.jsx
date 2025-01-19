import { Container } from '@mui/material'
import './App.css'
import Header from './components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewsList from './components/NewsList';

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
      <Container maxWidth="md" sx={{ display:'flex', flexDirection: 'column', gap: 4}}>
        <Header />
        <NewsList />
      </Container>
    </ThemeProvider>
  )
}

export default App
