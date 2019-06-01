import React from 'react';
import Palette from './Palette';
import seedColours from './seedColours';
import { generatePalette } from './colourHelpers';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColours[4])} />
    </div>
  );
}

export default App;
