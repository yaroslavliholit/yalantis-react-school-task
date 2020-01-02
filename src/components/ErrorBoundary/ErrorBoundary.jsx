import React, { Component } from 'react';
import { ErrorMessage } from './ErrorBoundaryStyles';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? <ErrorMessage>Error</ErrorMessage> : this.props.children;
  }
}
