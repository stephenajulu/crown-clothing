import React from 'react';

import NoMatchPage from '../../pages/404/404.component';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    // process error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return <NoMatchPage />
    }

    return this.props.children;
  }
}

export default ErrorBoundary;