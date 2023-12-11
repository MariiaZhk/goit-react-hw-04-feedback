import styled from 'styled-components';

export const NotificationAlert = styled.h3`
  margin-bottom: 60px;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.blue};
`;
