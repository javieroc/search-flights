import FlightItem from './FlightItem';

export default function FlightList(props) {
  const { data } = props;

  return (
    <div className="flight-list">
      {data.length && data.map(e => <FlightItem key={e.id} data={e} />)}
      <style jsx>{`
        .flight-list {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
