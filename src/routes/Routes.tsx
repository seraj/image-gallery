import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Category = lazy(() => import("../pages/Category"));

export const Routes: React.SFC = () => (
  <Suspense fallback={<span>Loading ...</span>}>
    <Switch>
      <Route exact path="/" component={Category} />
      <Route path="/category/:id" component={Category} />
    </Switch>
  </Suspense>
);
