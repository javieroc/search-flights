import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { initializeStore } from '../store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Get or Create the store with `undefined` as initialState
    // This allows you to set a custom default initialState
    const reduxStore = getOrCreateStore();

    // Provide the store to getInitialProps of pages
    ctx.reduxStore = reduxStore;

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, initialReduxState: reduxStore.getState() };
  }

  constructor(props) {
    super(props);
    this.reduxStore = getOrCreateStore(props.initialReduxState);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider store={this.reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MyApp;
