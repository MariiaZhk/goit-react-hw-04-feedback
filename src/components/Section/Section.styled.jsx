import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 60%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${props => props.theme.spacing(5)};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.extraLarge};
  font-weight: ${props => props.theme.fontWeights.extraBold};
`;
