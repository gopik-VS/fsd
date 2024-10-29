import { TextField, Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
   
    var[name,setname]=useState("gopika")

    const handleInput =(e)=>{
        console.log(e.target.value)
        setname(e.target.value)
    }
    var[val,setval]=useState()
    const handleClick =()=>{
        setval(name)
    }
  return (
    <div>
         <Typography variant='h6'>
            welcome {val}
         </Typography>
         <TextField variant='outlined' onChange={handleInput} label="enter the name" /> <br /><br />
         <Button variant='contained'onClick={handleClick}>confirm</Button>
    </div>
  )
}

export default Statebasics