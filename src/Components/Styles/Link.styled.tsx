import styled from "styled-components";
import {Link} from "react-router-dom";

export const LinkStyled = styled(Link)`
  padding: 20px;
  color: ${({theme}) => theme.colors.text};
  text-decoration: none;
`;