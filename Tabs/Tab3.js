// Kopieer deze volledige pagina en plaats hem in jouw Tab3.js file. Let op dat je alles hebt gekopieerd!
import React from 'react';
import { Alert } from 'react-native';
import { BackgroundContainer, BottomContainer, LoginContainer, TopContainer } from './Components/Containers';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button, SocialIcon, Image } from 'react-native-elements';

const bgImage = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/496ecb14589707.562865d064f9e.png"};
const amongUs = { uri: "https://www.kliksafe.nl/wp-content/uploads/2020/10/imposter.png"};


export default function Tab3() {
  return (
    <BackgroundContainer source={bgImage}>
      <TopContainer>

      </TopContainer>
      <LoginContainer>

      </LoginContainer>
      <BottomContainer>


      </BottomContainer>
    </BackgroundContainer>
  );
}