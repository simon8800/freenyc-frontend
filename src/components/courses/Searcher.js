import React, { useState } from 'react'
import { Grid, Input } from 'semantic-ui-react';

const Searcher = () => {
  const [phrase, setPhrase] = useState('')
  
  const handleChange = e => {
    setPhrase(e.target.value);
  }

  return (
    <Grid.Column>
      <Input onChange={handleChange} icon='search' value={phrase} placeholder='Search...' />
    </Grid.Column>
  )
}

export default Searcher
