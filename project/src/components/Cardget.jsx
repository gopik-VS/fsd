

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'

const Cardget = () => {
  return (
    <div>
        <h1>CASTLE</h1> <br /><br />
          <Grid container spacing={2}>
             <Grid item xs={4}>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200}}
        image="https://img.freepik.com/free-photo/view-fairytale-castle-with-pink-nature_23-2150844182.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Castle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>    
    </Grid>        
      <Grid item xs={4}>
     <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://images.stockcake.com/public/0/9/e/09e9ca7b-2f94-4d86-ab69-1866af9ed5ab_large/enchanted-fairy-tale-stockcake.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Castle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>
     <Grid item xs={4}>
     <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://www.pandotrip.com/wp-content/uploads/2014/09/Top-Castles-Mont-Saint-Michel-980x735.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Castle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>
     <Grid item xs={4}>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200}}
        image="https://img.freepik.com/premium-photo/fairytale-castle-with-lights-starry-night_36682-141364.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Castle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>    
    </Grid>        
      <Grid item xs={4}>
     <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2023/10/13/1cd7362a-0c20-466a-bbf2-4ccdd0d98559_2c6bd473.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Castle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>
     <Grid item xs={4}>
     <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="https://img.freepik.com/premium-photo/fairytale-castle-clouds_662214-84614.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Castle
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders.         </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Grid>
</Grid>
    </div>
  )
}

export default Cardget