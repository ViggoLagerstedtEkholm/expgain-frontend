import styled from "styled-components";

export const PaginationStyled = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow: 0 0 10px rgba(75, 75, 75, 0.15);
  margin-bottom: 10px;
  & > div {
    flex: 1;
  }
`

export const PaginationButton = styled.button`
  height: 10vh;
  flex: 50%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  
  &:hover {
    opacity: 0.8;
    
  }
`

