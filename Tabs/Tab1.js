import React from 'react';
import { MainContainer, ScrollContainer } from './Components/Containers';
import { NormalText } from './Components/Text';
import { NormalButton } from './Components/Buttons';

/*
OPDRACHT 1:
De tekst lees nu wel erg moeilijk op de app. Zorg dat er ruimte (padding) komt tussen de alineas!
OPDRACHT 2:
Niet alle tekst is zichtbaar op de pagina omdat de ScrollContainer nog niet werkt. 
Maak van de ScrollContainer een styled.ScrollView.
OPDRACHT 3:
Plaats onder de ScrollContainer een NormalButton met Tekst erin! Zorg ervoog dat deze button buiten de ScrollContainer zit.
OPDRACHT 4:
Open App.js. Plaats op regel 17 een titel en op regel 19 een Icon voor deze pagina
Kijk op https://oblador.github.io/react-native-vector-icons/ onder het kopje MaterialIcons
voor een overzicht van alle icons!
*/

export default function Tab1() {

  return (
    <MainContainer>
      <ScrollContainer>
        <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu tellus in libero eleifend aliquet non sed lacus. Fusce libero justo, cursus nec eros a, pharetra porttitor libero. Praesent consequat commodo aliquam. Pellentesque tristique viverra tincidunt. Fusce imperdiet congue leo, ut varius sapien lacinia eu. Donec sagittis orci sed diam luctus ornare eu non enim. Nam in viverra enim. Pellentesque scelerisque purus id augue porttitor porttitor. Aliquam blandit tempor lacus, eget pellentesque risus semper ac. Curabitur posuere at elit eget ullamcorper. Proin molestie vestibulum quam, nec aliquam nibh pellentesque et. Curabitur suscipit sem sed nisi eleifend feugiat. Cras at lobortis tortor. Duis gravida vitae dolor id varius. Nam quis rutrum nibh.</NormalText>
        <NormalText>Fusce tempus, erat quis accumsan pharetra, magna mi hendrerit urna, eu faucibus justo purus et nisi. Vivamus vestibulum dapibus nisi, at volutpat nulla. Cras hendrerit erat massa, accumsan interdum leo bibendum et. Pellentesque et dapibus ipsum. Cras aliquet sem urna, id efficitur ipsum aliquet eu. Curabitur ipsum metus, euismod id mi et, faucibus fermentum est. Fusce ultricies orci eget fermentum pharetra. Quisque vel euismod ipsum, eget tempor felis. Nunc efficitur nec ligula consequat tempus. Pellentesque bibendum, tellus at tincidunt interdum, orci magna pharetra magna, non suscipit felis tortor eget mi. Curabitur consequat ut velit eu sagittis. Donec erat nunc, viverra quis pulvinar ac, mattis vel urna.</NormalText>
        <NormalText>Nulla varius lectus erat, id volutpat dolor semper nec. Duis a gravida purus, non laoreet mauris. Nulla laoreet quis dolor ac semper. Phasellus in vulputate leo. Nam pulvinar dolor eros, quis congue odio tincidunt a. Morbi ultrices ante elit, vitae dapibus dolor fringilla nec. Integer luctus sit amet nisl sed dapibus. Vivamus ut lorem dui. Nulla placerat imperdiet sem vitae feugiat. Integer vehicula sapien vestibulum purus dictum placerat.</NormalText>
        <NormalText>Phasellus rutrum scelerisque libero vel porttitor. Sed a tellus ligula. Donec eu ante in nulla lobortis placerat eget vel nunc. Phasellus a varius risus, ac auctor nulla. Mauris cursus lectus sit amet erat aliquet condimentum. Integer eleifend, quam nec dapibus imperdiet, ligula metus ultricies ipsum, sed accumsan est elit ac sem. Suspendisse ut ultricies sapien.</NormalText>
        <NormalText>Mauris lacinia accumsan magna non tempus. Duis in sodales odio. Curabitur a nisl ligula. Curabitur non ligula ex. Pellentesque tempor consectetur feugiat. Ut scelerisque ullamcorper mauris id mattis. Cras accumsan ac lacus quis sagittis. Sed eu est sodales, malesuada nibh vitae, varius arcu. Curabitur at erat ornare, vulputate nunc at, congue sem. Aliquam erat volutpat. Fusce eget ligula at nulla fringilla eleifend.</NormalText>
        <NormalText>In ultricies dui at enim tincidunt mattis. Nam suscipit nulla ac felis lacinia, viverra elementum arcu feugiat. Integer risus est, ullamcorper ac interdum ac, suscipit non nibh. Nulla molestie, erat aliquet dictum suscipit, lacus ex fringilla nibh, a tempus tellus augue quis dolor. Donec eget justo mauris. Fusce venenatis urna nec venenatis fringilla. Donec a dolor ut orci gravida mattis eu eu leo. Curabitur sed volutpat nunc.</NormalText>
        <NormalText>Aliquam quis ipsum cursus, molestie purus sit amet, tristique velit. Morbi facilisis vulputate justo quis eleifend. Nullam dignissim ornare augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent scelerisque ante orci, sed venenatis arcu accumsan ut. Nam ut est ante. Proin rhoncus eros in diam faucibus, et luctus massa ultrices. Mauris eu elit mattis, placerat est sit amet, luctus felis. Morbi eget ipsum ante. Etiam at nisl consectetur, facilisis eros a, sollicitudin dolor. Vivamus viverra in justo ultrices aliquam. Suspendisse ultrices purus magna, eget vulputate metus dapibus nec. Sed dignissim porttitor interdum. Maecenas posuere laoreet orci in elementum.</NormalText>
      </ScrollContainer>
      {/* Plaats hier een NormalButton met NormalText erin! */}
    </MainContainer>
  );
}
