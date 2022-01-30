import styled from "styled-components";

export const ThemeButtonStyled = styled.button`
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 26px;
  font-weight: 700;
  padding: 15px 50px 10px 50px;
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  
  @media (max-width: ${({ theme }) => theme.sm}) {
    margin: 0 0 20px 0;
  }
`