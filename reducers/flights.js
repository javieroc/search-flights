const intialState = {
  inbound: [],
  outbound: []
};

const flights = (state = intialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        inbound: [...action.data.inbound],
        outbound: [...action.data.outbound]
      };
    default:
      return state;
  }
};

export default flights;
