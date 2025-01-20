import { Button, Card, CardActions, CardContent, Divider, Skeleton } from "@mui/material";

export default function LoadingSkeleton() {
    return (
        <Card>
            <Skeleton variant="rectangular" height={250} />
            <CardContent>
                <Skeleton variant="text" height={80}/>
                <Skeleton variant="text" width="50%"/>
                <Skeleton variant="text" width="50%"/>
                <Skeleton variant="text" width="50%"/>
                <Divider sx={{ my: 1 }}/>
                <Skeleton variant="rectangular" height={100} />
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" size="medium" target="_blank">Learn More</Button>
        </CardActions>
    </Card>
    )
}