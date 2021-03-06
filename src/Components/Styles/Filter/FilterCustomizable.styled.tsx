import styled from "styled-components";

export const CustomizableFilterHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 8px;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  & > div {
    flex: 1;
  }
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin: 20px 0;
  }
`

export const SearchBar = styled.input`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.sm}) {
    flex-direction: column;
    margin: 20px 0;
  }
`