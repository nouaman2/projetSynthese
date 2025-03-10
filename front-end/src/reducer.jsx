const initialState={
    flights:[],
    infoTrip:{
        type:'round-trip',
        nbrAdults:1,
        nbrChildren:0,
        nbrInfants:0,
        from:'marrakech',
        to:'london',
        date_depart:'',
        date_Arrive:'',
    },
    infoContact:{
        fname:'',
        lname:'',
        email:'',
        message:'',
    }
};
function reducer(state=initialState,action) {
  switch (action.type) {
    
    case 'fetch_data_flights':
        return {...state,flights:{...state.flights,...action.payload}};
    case 'set_infoTrip':
        return {...state,infoTrip:{...state.infoTrip,...action.payload}};
    case 'set_infoContact':
        return {...state,infoContact:{...state.infoContact,...action.payload}};
    default:
       return state;
  }
}

export default reducer;