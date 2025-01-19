export async function getNews(searchQuery) {
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