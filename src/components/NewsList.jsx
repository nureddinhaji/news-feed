import { Alert, Grid2 } from "@mui/material";
import NewsCard from "./NewsCard";
import LoadingSkeleton from "./LoadingSkeleton";
export default function NewsList({news, loading, error}) {

    if (loading) {
        return (
        <Grid2 container spacing={2} columns={{ xs: 1, sm: 2 }}>
            {new Array(6).fill(0).map((_, index) => {
                return (
                    <Grid2 key={index} size={1}>
                        <LoadingSkeleton />
                    </Grid2>
                )
            })}
        </Grid2>
        )
    }

    if(error) {
        return (
            <Alert severity="error">{error}</Alert>
        )
    }

    if(news.length === 0) {
        return (
            <Alert severity="error">There is no news.</Alert>
        )
    }
    
    return (
        <Grid2 container spacing={2} columns={{ xs: 1, sm: 2 }}>
            {news.map((article) => {
                if(article.title === "[Removed]") {
                    return null;
                }
                return (
                    <Grid2 key={JSON.stringify(article)} size={1}>
                        <NewsCard {...article}/>
                    </Grid2>
                )
            })}
        </Grid2>
    )
}