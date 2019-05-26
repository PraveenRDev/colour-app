import React from 'react';
import Palette from './Palette';
import seedColours from './seedColours';
import { generatePalette } from './colourHelpers';

function App() {
  console.log(generatePalette(seedColours[5]))
  return (
    <div>
      <Palette {...seedColours[5]} />
    </div>
  );
}

export default App;
