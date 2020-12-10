import styled from 'styled-components/native';

export const NormalButton = styled.TouchableOpacity`
    background-color: ${props => props.color || 'lightblue'};
    padding: 10px;
    border-radius: 7px;
`