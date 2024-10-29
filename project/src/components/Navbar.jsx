import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div>
           <AppBar sx={{
           background:'rgb(238,174,202)',
           background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(164,62,100,1) 100%);'
           }}>
        <Toolbar>
         <Typography variant="h6"> My_APP </Typography>
         <Link to='/s'>
         <Button variant='conatained'>Signup</Button>
         </Link>

         <Link to='/pro'>
         <Button variant='conatained'>about</Button>
         </Link>
         <Link to='/c'>
         <Button variant='conatained'>product</Button>
         </Link>
         <div class="nav">
         <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          </div>
           </Toolbar>
      </AppBar>

   <br /><br /><br /><br />
   
  
          
  </div>
  )
}

export default Navbar