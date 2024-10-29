import { Button ,TextField } from '@mui/material'
import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div class ='sign'>
       <TextField  label="name" variant="outlined" /><br /><br />
       <TextField  label="age" variant="outlined" /><br /><br />
       <TextField  label="phone no " variant="outlined" /><br /><br />
       <TextField  label="password" variant="outlined" /><br /><br />
       <Button variant="outlined">Submit</Button>

    </div>
  )
}

export default Signup