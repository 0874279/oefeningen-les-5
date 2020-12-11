import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ArrayList, ListItem, MainContainer } from './Components/Containers';
import { Tab2Text } from './Components/Text';
import { ArrayData } from './Data';

/*
Hieronder ga je een ListView gebruiken. Een ListView gebruik je om data uit een array te printen.
De data uit de array komt uit Data.js. De bedoeling is dat jij de data uit deze array op het 
scherm weet te printen. Kijk op https://docs.expo.io/versions/v37.0.0/react-native/using-a-listview/
voor meer info over een ListView.
OPDRACHT 1:
Zoals je op je telefoon kunt zien wordt het stukje met 'Hier komen de gegevens uit Data.js te staan.'
meerdere keren geprint. Waarom is dat zo?
OPDRARCHT 2:
Vervang 'Hier komen de gegevens uit Data.js te staan.' voor {item.name}. Wat gebeurd er?
OPDRACHT 3:
Voeg meerdere NormalText componenten toe en gebruik de namen uit Data.js om alle gegevens
op je scherm te printen.
OPDRACHT 4:
Voeg padding toe aan de ListItem, deze vind je in Containers.js
Voeg ook andere styling toe op deze pagina Eventueel kan je ook stying aan Tab2Text toevoegen in Text.js
*/
export default function Tab2() {
  return (
    <MainContainer>
      <ArrayList 
        data={ArrayData}
        renderItem={(item) => 
        <ListItem>
          <Tab2Text>Hier komen de gegevens uit Data.js te staan.</Tab2Text>
        </ListItem>}
      />
        
    </MainContainer>
  );
}
