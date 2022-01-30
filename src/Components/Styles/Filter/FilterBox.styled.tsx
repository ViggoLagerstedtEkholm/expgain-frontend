import styled from "styled-components";

export const FilterBoxStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 8px;
  min-height: 50vh;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(75, 75, 75, 0.15);
  margin: 40px 0;
  padding: 10px;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
    margin: 20px 0;
  }
`

export const Posting = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 8px;
  height: 200px;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(168, 168, 168, 0.15);
  margin: 10px 0;
  padding: 15px;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({theme}) => theme.sm}) {
    flex-direction: column;
    margin: 20px 0;
  }
`