import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MainContainer } from './Components/Containers';
import { SmallText } from './Components/Text';

export default function Tab3() {
  return (
    <MainContainer>
      <SmallText>
        Deze pagina is voor als je klaar bent met Tab1 en Tab2. 
        Voeg hier een klikbare afbeelding toe. Kijk hoe je dit ookalweer doet in de vorige lessen!</SmallText>
    </MainContainer>
  );
}