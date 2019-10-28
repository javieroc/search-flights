import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import FlightList from '../components/FlightList';
import data1 from '../epa-cor.json';
import data2 from '../epa-mdz.json';

export default function Home() {
  const data = [...data1.flights, ...data2.flights];

  return (
    <Layout title="Antd">
      <div className="main-content">
        <section className="inner-content">
          <SearchForm />
          <FlightList data={data} />
        </section>
      </div>
      <style jsx>{`
        .main-content {
          width: 90%;
          margin: auto;
        }
        .inner-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
}
