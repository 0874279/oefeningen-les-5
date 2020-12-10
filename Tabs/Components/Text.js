import styled from "styled-components/native";

export const SmallText = styled.Text`
    font-size: 12px;
    color: ${props => props.color || 'black'};
`;

export const NormalText = styled.Text`
    font-size: 16px;
    color: ${props => props.color || 'black'};
`;

export const BigText = styled.Text`
    font-size: 20px;
    color: ${props => props.color || 'black'};
`;