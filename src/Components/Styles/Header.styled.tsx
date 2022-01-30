import styled from "styled-components";


export const HeaderStyled = styled.header`
  background-color: ${({theme}) => theme.colors.header};
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${({theme}) => theme.sm}) {
    flex-direction: column;
    padding-bottom: 15px;
  }
`

export const AuthBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: center;
  
  @media (max-width: ${({theme}) => theme.sm}) {
    flex-direction: column;
  }
`

export const Logo = styled.p`
  font-size: 35px;
`

export const IconStyle = styled.img`
  border-radius: 100%;
`

export const DropdownMenuStyle = styled.div`
  position: absolute;
  top: 120px;
  width: 300px;
  height: auto;
  max-height: 300px;
  margin-left: 130px;
  background-color: ${({theme}) => theme.colors.dropdown};
  border: var(--border);
  padding-left: 0.5rem;
  padding-right: 1.5rem;
  border-radius: 5px;
  z-index: 2;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(185, 185, 185, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.sm}) {
    top: 320px;
    margin-left: 50%;
  }
`

export const ScrollItemStyle = styled.div`
  height: 50px;
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  align-items: center;
  border-radius: 5px;
  padding: 0.5rem;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.dropdown};

  &:hover {
    opacity: 0.9;
    background-color: ${({theme}) => theme.colors.header};
  }
`