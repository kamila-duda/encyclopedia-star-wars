import React from 'react';
import HomePage from './features/HomePage';
import { StyledHeader } from './styled';

function App() {
  return (
   <>
   <StyledHeader>
   <h1>Welcome to The Star Wars Encyclopedia</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus erat, efficitur sed posuere id, feugiat id orci. Curabitur bibendum libero in gravida ultrices. Duis eu odio sit amet lorem dignissim dignissim ac in orci. Cras sit amet cursus enim. Morbi eu elit eu erat facilisis hendrerit.
   </p>
   </StyledHeader>
   <HomePage/>
   </>
  );
}

export default App;
