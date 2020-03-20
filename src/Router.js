import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Welcome from "./pages/landingPage/landingPage";
import Example2 from "./pages/postLogin/dashboard/MenuExample2.jsx";
import Login from "./pages/login/login";
import { PrivateRoute } from "./PrivateRoute";

import ErrorBoundary from "./utils/ErrorBoundries.jsx";

import ElevatusSearch from "./pages/elevatusSearchPage/ElevatusSearchPage";
import ElevatusUploadCVPage from "./pages/elevatusUploadCVPage/ElevatusUploadCVPage";

export default function Router() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ElevatusSearch} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upload" component={ElevatusUploadCVPage} />
          <PrivateRoute strict path="/menu2" component={Example2} />
          <Route path="*" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
