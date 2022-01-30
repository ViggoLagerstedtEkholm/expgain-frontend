import styled from "styled-components";

export const AssignmentLayout = styled.div`
  display: flex;
  gap: 25px;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`

export const AssignmentInfo = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

export const AssignmentText = styled.div`
  padding-left: 25px;
`

export const AssignmentLocation = styled.div`
  font-family: Candara;
`

export const CompanyInfo = styled.div`
  width: 25%;
  padding-left: 15px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

export const CompanyLocation = styled.p`
  text-align: left;
  font-family: Candara;
`

export const Badge = styled.p`
  text-align: center;
  padding: 10px;
  background-color: #5265ff;
  width: auto;
  margin: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`



