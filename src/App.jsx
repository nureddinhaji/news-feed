import { Button, Container, Stack } from '@mui/material'
import './App.css'
import Header from './components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewsList from './components/NewsList';
import { useEffect, useRef, useState } from 'react';
import { debounce } from './utils';
import { getNews } from './services/newsApi';


const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway", "serif",
    ].join(','),
  },
});

// Add this function to your button's onclick event
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes it scroll smoothly
  });
}

function App() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [label, setLabel] = useState("general");

  const pageNo = useRef(1);
  const querySearch = useRef("");


  // Function for load news
  function loadNews() {
    setLoading(true);
    setError(null);
    getNews(querySearch.current, pageNo.current, label).then((data) => {
      setNews(data);
    }).catch((error) => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }

    useEffect(() => {
      loadNews();
    }, [label])


  // Create search handler function here since it needs access to state
  const searchHandler = (searchQuery) => {
    pageNo.current = 1;
    querySearch.current = searchQuery;
    loadNews();
  };

  // Create debounced version
  const debouncedSearchHandler = debounce(searchHandler, 1000);

// Functions for pagination
  const handleNext = () => {
    pageNo.current += 1;
    loadNews();
    scrollToTop();
  };

  const handlePrevious = () => {
    pageNo.current -= 1;
    loadNews();
    scrollToTop();
  }

  const labelHandler = (e) => {
    setLabel(e.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ display:'flex', flexDirection: 'column', gap: 4, mb:4}}>
        <Header searchHandler={debouncedSearchHandler} label={label} labelHandler={labelHandler}/>
        <NewsList news={news} loading={loading} error={error}/>
        <Stack spacing={2} direction="row" useFlexGap sx={{ justifyContent: 'space-between'}}>
          <Button variant="contained" onClick={handlePrevious} disabled={pageNo.current === 1}>Previous</Button>
          <Button variant="contained" onClick={handleNext} disabled={error && news.length < 10}>Next</Button>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App
