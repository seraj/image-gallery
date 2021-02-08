import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary, Layout } from "./components";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <Routes />
        </Layout>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
