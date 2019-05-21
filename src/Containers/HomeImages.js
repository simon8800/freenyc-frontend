// React Stuff
import React from 'react';
// Semantic UI Stuff
import { Grid } from 'semantic-ui-react';

export default function HomeImages() {
  return (
    <Grid columns={3}>
      <Grid.Column>
        <figure className="gallery_item">
          <img alt="a group of people dancing" className="gallery__img" src="https://images.pexels.com/photos/2061396/pexels-photo-2061396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure>
      </Grid.Column>
      <Grid.Column>
       <figure className="gallery_item">
         <img alt="someone strumming a guitar"className="gallery__img" src="https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=550"></img>
       </figure>
      </Grid.Column>
      <Grid.Column>
        <figure className="gallery_item">
          <img alt="a man swimming in a pool"className="gallery__img" src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure>
      </Grid.Column>
      <Grid.Column>
        <figure className="gallery_item">
          <img alt="woman playing the ukulele"className="gallery__img" src="https://images.pexels.com/photos/1537171/pexels-photo-1537171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure>
      </Grid.Column>
      <Grid.Column>
        <figure className="gallery_item">
          <img alt="woman doing yoga"className="gallery__img" src="https://images.pexels.com/photos/460307/pexels-photo-460307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure>
      </Grid.Column>
      <Grid.Column>
        <figure className="gallery_item">
          <img alt="two women looking at code on a laptop"className="gallery__img" src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
        </figure>
      </Grid.Column>
      
    </Grid>
  )
}

