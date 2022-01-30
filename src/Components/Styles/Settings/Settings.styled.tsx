import styled from "styled-components";

export const SettingsLayout = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: ${({theme}) => theme.xl}) {
    flex-direction: column;
    text-align: center;
  }
`

export const SelectMenu = styled.ul`
  width: 25%;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 5px;
  text-align: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media (max-width: ${({theme}) => theme.xl}) {
    width: 100%;
  }

  @media (max-width: ${({theme}) => theme.md}) {
    display: inline-flex;
    gap: 35px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100px;
    width: 100%;
    text-decoration: none;
  }
`

export const SelectMenuItem = styled.li`
  height: 60px;
  justify-content: center;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:hover {
    opacity: 25%;
    cursor: pointer;
  }
  
  & > p{
    margin: 0;
  }
`

export const SettingsPanel = styled.div`
  width: 75%;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 5px;
  justify-content: center;
  text-align: center;
  padding: 25px;
  @media (max-width: ${({theme}) => theme.xl}) {
    width: 100%;
  }
`