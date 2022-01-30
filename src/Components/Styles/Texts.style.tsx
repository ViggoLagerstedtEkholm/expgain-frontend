import styled from "styled-components";

export const LargeText = styled.h1`
  color: ${({theme}) => theme.colors.text};
`

export const MediumText = styled.h3`
  color: ${({theme}) => theme.colors.text};
`

export const Text = styled.p`
  color: ${({theme}) => theme.colors.text};
`

export const Date = styled.p`
  font-family: "Calibri Light",serif;
  color: ${({theme}) => theme.colors.text};
`
