import styled from "styled-components";
import {Link} from "react-router-dom";

export const LogoLinkStyle = styled(Link)`
  padding: 20px;
  color: ${({theme}) => theme.colors.text};
  text-decoration: none;
`;

export const DropdownLinkStyle = styled(Link)`
  padding: 20px;
  width: 100%;
  height: 100%;
  text-align: left;
  margin-bottom: 20px;
  color: ${({theme}) => theme.colors.text};
  text-decoration: none;
`;