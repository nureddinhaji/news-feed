import { Alert, Box, Grid2 } from "@mui/material";
import NewsCard from "./NewsCard";
import FacebookCircularProgress from "./CircularProgress";
export default function NewsList({news, loading}) {

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <FacebookCircularProgress />
            </Box>
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
                return (
                    <Grid2 key={JSON.stringify(article)} size={1}>
                        <NewsCard {...article}/>
                    </Grid2>
                )
            })}
        </Grid2>
    )
}