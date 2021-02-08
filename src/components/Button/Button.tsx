import React from "react";
import { ButtonType } from "./Button.types";
import { ReactComponent as Loader } from "./Loader.svg";
import * as Styled from "./Button.styled";

const Button = React.memo<ButtonType>((props) => {
  const { loading, children, ...restProps } = props;
  return (
    <Styled.Button disabled={loading} {...restProps}>
      {loading ? <Loader /> : children}
    </Styled.Button>
  );
});
export default Button;
