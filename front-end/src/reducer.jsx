const initialState={
    flights:[
        {
            id:4,
            airline: "Lufthansa",
            logo: "https://transvelo.github.io/mytravel-html/assets/img/90x90/img4.png",
            heure_depart: "06:45",
            departure_place: "Frankfurt",
            heure_arrive: "09:30",
            arrival_place: "Madrid Barajas",
            duration:{hours:5,minutes:30},
            price:440,
            stops: 0,
            type :'First class'
        },
        {
            id:5,
            airline: "Turkish Airlines",
            logo: "https://transvelo.github.io/mytravel-html/assets/img/90x90/img3.png",
            heure_depart: "20:00",
            departure_place: "Istanbul",
            heure_arrive: "23:15",
            arrival_place: "Berlin Brandenburg",
            duration:{hours:7,minutes:45},
            price:399,
            stops: 3,
            type: 'business'
        }
    ],
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
        console.log(action.payload);
        
        return {...state,flights:action.payload};
    case 'set_infoTrip':
        return {...state,infoTrip:{...state.infoTrip,...action.payload}};
    case 'set_infoContact':
        return {...state,infoContact:{...state.infoContact,...action.payload}};
    default:
       return state;
  }
}

export default reducer;