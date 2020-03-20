import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <CircularProgress color="secondary" />;
    }

    return this.props.children;
  }
}
