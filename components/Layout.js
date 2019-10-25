import React from 'react';
import Head from 'next/head';
import { Layout, Menu } from 'antd';

const { Header, Footer, Content } = Layout;

export default class LayoutComponent extends React.Component {
  render() {
    const { children, title } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <Header>
          <h1>Search flights</h1>
        </Header>
        <Content>{children}</Content>
      </div>
    );
  }
}
