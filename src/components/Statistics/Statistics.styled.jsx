import styled from 'styled-components';

export const FeedbackCountersList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${props => props.theme.spacing(6)};
`;

export const FeedbackCountersItem = styled.li`
  color: ${props => props.theme.colors.blue};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;
