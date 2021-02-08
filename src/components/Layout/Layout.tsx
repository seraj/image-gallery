import React from "react";
import { Row, Col } from "react-flexbox-grid";
import * as Styled from "./Layout.styled";
import { SideNav } from "../";

const Layout = React.memo(({ children }) => {
  return (
    <Styled.Page>
      <Styled.PageContent>
        <Row>
          <Col xs={4} sm={4} md={3}>
            <SideNav />
          </Col>
          <Col xs={8} sm={8} md={9}>
            {children}
          </Col>
        </Row>
      </Styled.PageContent>
    </Styled.Page>
  );
});

export default Layout;
