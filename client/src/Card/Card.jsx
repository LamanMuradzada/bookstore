import React from 'react';
import MainBestsellers from '../MainBestsellers/MainBestsellers';
import MainDetective from '../MainDetective/MainDetective';
import MainFantasy from '../../MainFantasy/MainFantasy';

const Card = () => {
   
  return (
    <> 
        <MainBestsellers />
        <MainDetective />
        <MainFantasy />
    </>
  )
}

export default Card;