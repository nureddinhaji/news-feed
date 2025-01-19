import { Grid2 } from "@mui/material";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

export default function NewsList() {

    const [news, setNews] = useState([]);

    async function getNews() {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
        const data = await response.json();
        const articles = data.articles;
        console.log(articles)
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
        getNews().then((data) => {
            console.log(data)
            setNews(data)});
    }, [])

    return (
        <Grid2 container spacing={2} columns={{ xs: 1, sm: 2 }}>
            {news.map((article) => {
                return (
                    <Grid2 key={JSON.stringify(article)} size={1}>
                        <NewsCard {...article}/>
                    </Grid2>
                )
            })}
        </Grid2>
    )
}