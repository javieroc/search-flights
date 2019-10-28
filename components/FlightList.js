import FlightItem from './FlightItem';

export default function FlightList(props) {
  const { data, title } = props;

  return (
    <div className="flight-list">
      {data.length > 0 && <h3>{title}</h3>}
      {data.length > 0 && data.map(e => <FlightItem key={e.id} data={e} />)}
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
