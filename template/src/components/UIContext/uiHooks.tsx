import React from 'react';
import { UIContext } from './UIContext';

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === null) {
    throw new Error('Missing provider for UIContext.');
  }
  return context;
};
