import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar sx={{
        background: 'rgb(238,174,202)',
        background:' radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,215,233,1) 100%);'
      }}>
        <Toolbar>
        <Typography variant="h6">
            News
          </Typography> 
          <Link to='/table'>
        <Button variant='contained'>table</Button>
        </Link>
        
        </Toolbar>
       
      </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar