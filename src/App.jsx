import { Container } from '@mui/material'
import './App.css'
import Header from './components/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NewsList from './components/NewsList';
import { useEffect, useState } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway", "serif",
    ].join(','),
  },
});




function App() {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getNews(searchQuery) {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchQuery}&country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        const data = await response.json();
        const articles = data.articles;
        return articles.map((article) => {
            return (
                {
                    title: article.title,
                    author: article.author,
                    description: article.description,
                    image: article.urlToImage,
                    url: article.url,
                    source: article.source.name,
                    date: article.publishedAt
                }
            )
        })
    }
    
    useEffect(() => {
      setLoading(true);
        getNews("").then((data) => {
            setNews(data);
            setLoading(false);
        });
    }, [])

  function searchHandler(searchQuery) {
    setLoading(true);
    getNews(searchQuery).then((data) => {
        setNews(data);
        setLoading(false);
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ display:'flex', flexDirection: 'column', gap: 4}}>
        <Header searchHandler={searchHandler} />
        <NewsList news={news} loading={loading}/>
      </Container>
    </ThemeProvider>
  )
}

export default App
