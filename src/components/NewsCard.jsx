import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";

export default function NewsCard({title, author, description, image, url, source, date}) {
    console.log
    return (
        <Card>
            {image && <CardMedia sx={{ height: 250 }} image={image} title="green iguana"/>}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Source: </strong>{source}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Author: </strong>{author}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <strong>Published Date: </strong>{new Date(date).toLocaleDateString()}
                    </Typography>
                    {description && <><Divider sx={{ my: 1 }}/>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography></>}
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" size="medium" href={url} target="_blank">Learn More</Button>
      </CardActions>
    </Card>
    )
}