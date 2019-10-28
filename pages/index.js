import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import FlightList from '../components/FlightList';
import data1 from '../epa-cor.json';
import data2 from '../epa-mdz.json';
import { setData } from '../actions';

function Home(props) {
  const { inbound, outbound } = props;

  return (
    <Layout title="Antd">
      <div className="main-content">
        <section className="inner-content">
          <SearchForm />
          <FlightList title="Inbound Fligths" data={inbound} />
          <FlightList title="Outbound Flights" data={outbound} />
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

const mapStateToProps = state => {
  const { inbound, outbound } = state.flights;
  return { inbound, outbound };
};

const mapDispatchToProps = dispatch => ({
  setData: data => dispatch(setData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
