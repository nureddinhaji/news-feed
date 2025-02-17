export async function getNews(searchQuery, page, label) {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchQuery}&page=${page}&category=${label}&pageSize=10&country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
    const data = await response.json();
    if(data.status === "error") {
        console.log(data.message);
        throw new Error("An Error Occured. Please try again later.");
    }
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