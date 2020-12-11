import styled from 'styled-components/native';

// Hieronder pas je de MainContainer aan. Dit is de basis container van Tab1.js, Tab2.js en Tab3.js
// Probeer maar eens de background-color aan te passen, 
// zie je dat de achtergrond van alle pagina's wordt aangepast?
export const MainContainer = styled.View`
    flex: 1;
    background-color: salmon;
    align-items: center;
    justify-content: center;
`;

// Hieronder pas je de ScrollContainer aan, deze wordt gebruikt in Tab1.js
export const ScrollContainer = styled.View`
`;

// Hieronder pas je de ArrayList aan, deze wordt gebruikt in Tab2.js
export const ArrayList = styled.FlatList`

`;

// Hieronder pas je de ListItems aan, deze wordt gebruikt in Tab2.js
export const ListItem = styled.View`

`;
