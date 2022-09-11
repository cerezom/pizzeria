import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza todo el dia</h1>
      <p>Salsa Alfredo de trufas</p>
      <FeatureButton>Ordena Ahora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
