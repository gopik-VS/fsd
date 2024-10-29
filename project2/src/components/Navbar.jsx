import { AppBar, Toolbar, Typography ,Button, Box} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
            <Typography variant="h6" >
           My app
          </Typography>
          &nbsp;
          <Box sx={{marginLeft:'auto'}}/>
          <Link to='/s'>
          <Button variant='contained'>STATE</Button>
          </Link>  &nbsp;
          <Link to='/c'>
          <Button variant='contained'>Counter</Button>
          </Link> &nbsp;
          <Link to='/d'>
          <Button variant='contained'>Name</Button>
          </Link>
         
            </Toolbar>
        </AppBar>
        <br /><br /><br />
    </div>
  )
}



export default Navbar