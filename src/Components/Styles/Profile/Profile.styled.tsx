import styled from "styled-components";

export const ProfileHeaderCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  justify-content: center;

  & > div {
    flex: 1;
  }

  @media (max-width: ${({theme}) => theme.sm}) {
    flex-direction: column;
    margin: 20px 0;
    padding: 30px;
  }
`

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`

export const HandlesBox = styled.div`
  width: 150px;
  height: 150px;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
`