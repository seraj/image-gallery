import styled from "styled-components";

export const Button = styled.button`
  border: none;
  position: relative;
  user-select: none;
  font-family: inherit;
  font-weight: bold;
  text-decoration: none;
  transition: all 100ms ease-out 0s;
  padding: 15px 35px;
  border-radius: 0.8rem;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: rgb(18, 106, 250);
  &:disabled {
    background: #eee;
    cursor: not-allowed;
  }
`;
