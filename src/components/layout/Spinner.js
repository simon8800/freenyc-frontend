import React from 'react'
import { Image } from 'semantic-ui-react';
import spinner from './spinner.svg';

const Spinner = () => {
  return (
    <Image centered src={spinner} size='medium'></Image>
  )
}

export default Spinner
