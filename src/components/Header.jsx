// Import CSS
import { Typography } from '@mui/material';
import './Header.css';

import Box from '@mui/material/Box';





export default function Header() {
    return (
        <Box component="header" sx={{ p: 2, border: '1px dashed grey', bgcolor: 'primary.main', marginTop: '20px', boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
            <Typography noWrap variant="h1" color='primary.contrastText' component="h1" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: '30px', fontWeight: 'bold' }}>
            <svg className='header_svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z"/></svg>News Feed
            </Typography>
        </Box>
    )
}