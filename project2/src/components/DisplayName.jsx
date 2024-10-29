import { Button, Typography, } from '@mui/material'
import React, { useEffect, useState } from 'react'

const DisplayName = () => {
    var[name,setname]=useState()
    const reactpg =()=> {
      setname("React")
    }
    const angularpg =()=> {
       setname("Angular")
    }
    const vuepg =()=> {
       setname("Vue")
    }
    useEffect(()=>{
        angularpg()
    },[])
  return (
    <div>
        <Typography variant='h4'>welcome to:{name}</Typography> <br /><br />
        <Button variant='contained' color='primary'onClick={reactpg}>React</Button> &nbsp;
        <Button variant='contained' color='secondary'onClick={angularpg}>Angular</Button> &nbsp;
        <Button variant='contained' color='success'onClick={vuepg}>Vue</Button> &nbsp;
    </div>
  )
}

export default DisplayName