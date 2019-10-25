import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';

export default function Home() {
  return (
    <Layout title="Antd">
      <section>
        <SearchForm />
      </section>
    </Layout>
  );
}
