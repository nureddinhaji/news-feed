import { Container } from '@mui/material'
import './App.css'
import Header from './components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewsList from './components/NewsList';
import { useEffect, useState } from 'react';
import { debounce } from './utils';
import { getNews } from './services/newsApi';


const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway", "serif",
    ].join(','),
  },
});

function App() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
        getNews("").then((data) => {
            setNews(data);
            setLoading(false);
        });
    }, [])


  // Create search handler function here since it needs access to state
  const searchHandler = (searchQuery) => {
    setLoading(true);
    getNews(searchQuery).then((data) => {
      setNews(data);
      setLoading(false);
    });
  };

  // Create debounced version
  const debouncedSearchHandler = debounce(searchHandler, 1000);




  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ display:'flex', flexDirection: 'column', gap: 4}}>
        <Header searchHandler={debouncedSearchHandler} />
        <NewsList news={news} loading={loading}/>
      </Container>
    </ThemeProvider>
  )
}

export default App
