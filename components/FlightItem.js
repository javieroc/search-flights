import { Card } from 'antd';
import moment from 'moment';

export default function FlightItem(props) {
  const {
    id,
    origin,
    destination,
    departureDate,
    arrivalDate,
    carrier,
    flightNo
  } = props.data;

  return (
    <div className="flight-item">
      <Card>
        <h4>{moment(departureDate).format('dddd, MMMM do YYYY')}</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>{moment(departureDate).format('HH:mm')}</h3>
            <h5>{origin}</h5>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center'
            }}
          >
            <span
              style={{
                borderBottom: '1px solid',
                width: 200,
                color: 'orange'
              }}
            />
            <h4 style={{ textAlign: 'center' }}>{`${carrier}${flightNo}`}</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>{moment(arrivalDate).format('HH:mm')}</h3>
            <h5>{destination}</h5>
          </div>
        </div>
      </Card>
      <style jsx>{`
        .flight-item {
          width: 400px;
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
}
