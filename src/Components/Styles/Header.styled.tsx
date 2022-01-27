import styled from "styled-components";


export const HeaderStyled = styled.header`
  background-color: ${({theme}) => theme.colors.header};
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    padding-bottom: 15px;
  }
`

export const AuthBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: center;
  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.p`
  font-size: 35px;
`

export const IconStyle = styled.img`
  border-radius: 100%;
`