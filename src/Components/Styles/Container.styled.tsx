import styled from "styled-components";

export const Container = styled.div`
  width: 1600px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  color: ${({theme}) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.sm}) {
    padding: 0 10px;
    text-align: center;
  }
`

export const Page = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 800px;
  padding: 0 20px;
  margin: 20px 0 auto;
  color: ${({theme}) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.sm}) {
    flex-direction: column;
    padding: 0;
  }
`
