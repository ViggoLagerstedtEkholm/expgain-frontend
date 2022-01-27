import styled from "styled-components";

export const LargeText = styled.h1`
  color: ${({theme}) => theme.colors.text};
  margin: 6% 0 0 0;
`

export const MediumText = styled.h3`
  color: ${({theme}) => theme.colors.text};
`

export const Text = styled.p`
  color: ${({theme}) => theme.colors.text};
`