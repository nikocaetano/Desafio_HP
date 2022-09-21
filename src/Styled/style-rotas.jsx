import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const Menu = styled(Link)`
text-decoration:none;
color:white;
`

export const Li = styled.li`
list-style:none;

`

export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
padding-top:25px;
`