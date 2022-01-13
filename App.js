import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import Box from './src/Box';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Box />
    </TailwindProvider>
  )
}

export default App;
