import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  color: ${({theme}) => theme.colors.text};
`

export const Page = styled.div`
  width: 1200px;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
  color: ${({theme}) => theme.colors.text};
`
