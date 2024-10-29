import { Grid } from '@mui/material'
import React from 'react'

const Gridget = () => {
  return (
    <div>
        <Grid  container spacing={2}>
             <Grid item xs={8}>
                <h1>Castle 1  </h1>
                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4vQIgDxZzD_xCE5n_3Gk_Be4IaGiBXw0GcJAx9Q84zrQIQcXXphpMwRi9uaGOyPBGsWcJc0gITs3b6h-uAWXnsaktwFGrsfap_LS1m2T2t8el__qZBi7vxC_7zVsOo9ua_1kISdD-WEKX3D9Pg8_OxLcLNxf7F3eWHTx69MumWkcz9qFhzaRNgpHa/w640-h400/2015-11-15_0042.jpg'height="300px" width="300px"></img>
             </Grid>
             <Grid item xs={3}>
                <h1>Castle 2 </h1>
                <img src='https://i.pinimg.com/236x/f9/cb/7a/f9cb7ab37acae4491c0b0c4d0ee21bfa.jpg'height="300px" width="300px"></img>
             </Grid>
             <Grid item xs={8}>
                <h1>Castle 3 </h1>
                <img src='https://hips.hearstapps.com/hmg-prod/images/the-chateau-de-chambord-castle-unesco-world-heritage-site-news-photo-1575309440.jpg?crop=0.668xw:1.00xh;0.175xw,0&resize=980:*'height="300px" width="300px"></img>
             </Grid>
             <Grid > 
                <h1>Castle 4 </h1>
                <img src='https://preview.redd.it/the-island-behind-the-famous-disney-animation-mont-saint-v0-q0imidbcapqa1.jpg?width=640&crop=smart&auto=webp&s=71a2f927464bdc977e478424aa398ffd7312d222'height="300px" width="300px"></img>
             </Grid>
        </Grid>
        
    </div>
  )
}

export default Gridget