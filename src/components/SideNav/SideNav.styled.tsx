import styled from "styled-components";
import { ListItemProps } from "./SideNav.types";

export const NavContainer = styled("aside")`
  height: 100vh;
  background-color: rgb(255, 255, 255);
  z-index: 10;
  top: 0px;
  left: 0px;
  position: inherit;
  transition: width 200ms ease-out 0s;
  width: 100%;
  box-shadow: rgb(96 120 144 / 20%) 0.2rem 0px 8px;
`;

export const NavHeader = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  min-height: 7.2rem;
  -webkit-box-align: center;
  place-items: center;
  display: grid;
  font-size: 30px;
  grid-template-columns: 7.2rem calc(18.4rem);
  &:after {
    content: "";
    width: calc(100% - 4rem);
    display: block;
    position: absolute;
    border-top: 1px solid rgb(223, 228, 233);
    margin: 0px auto;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
`;

export const List = styled.ul`
  flex: 1 1 0%;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  overflow: hidden auto;
`;
export const ListItem = styled.li<ListItemProps>`
  ${({ selected }) => {
    const backColor = selected ? "rgb(189 211 226)" : "transparent";
    const backColorHover = selected ? "rgb(189 211 226)" : "rgb(239, 242, 244)";
    return `
    a  {
        text-decoration: none;
        box-sizing: border-box;
        display: grid;
        margin: 0px 1.2rem;
        color:#333;
        border-radius: 0.4rem;
        grid-template-columns: calc(6rem) calc(17.2rem);
        place-items: center flex-start;
        -webkit-box-align: center;
        user-select: none;
        min-height: 4rem;
        transition: all 100ms ease-out 0s;
        cursor: pointer;
        background-color: ${backColor};
        &:hover {
            background-color: ${backColorHover};
        }
    }
    span {
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-self: left;
        overflow: hidden;
        padding: 0 10px;
        transition: opacity 200ms ease-out 0s, color 100ms ease-out 0s;
        opacity: 1;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 0rem;
        line-height: 2.2rem;
    }
  `;
  }}
`;
