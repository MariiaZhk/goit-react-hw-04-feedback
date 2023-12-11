import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const OptionButton = styled.button`
  background-color: #0a66c2;
  border-radius: ${props => props.theme.borderRadius.buttonBorder};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.white};
  width: 160px;
  height: 60px;
  margin: 20px;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:active {
    background-color: ${props => props.theme.colors.hovers};
    color: ${props => props.theme.colors.white};
  }
`;
