const setInfoTrip = (properties) =>({type:'set_infoTrip',payload:properties});
const setInfoContact = (properties) =>({type:'set_infoContact',payload:properties});
const fetch_data_flights = (data) =>{
    function getDurationOfFlight(startTime, endTime) {
        const [startHours, startMinutes] = startTime.split(":").map(Number);
        const [endHours, endMinutes] = endTime.split(":").map(Number);
    
        let start = startHours * 60 + startMinutes; // Convert to total minutes
        let end = endHours * 60 + endMinutes; // Convert to total minutes
    
        // Handle cases where endTime is on the next day
        if (end < start) {
            end += 24 * 60;
        }
    
        let diff = end - start;
        let hours = Math.floor(diff / 60);
        let minutes = diff % 60;
    
        return { hours, minutes };
    }
    const newData = data.map((item)=>{
        return {...item,duration:getDurationOfFlight(item.heure_depart,item.heure_arrive)}
    });
    return{type:'fetch_data_flights',payload:newData}
};

export  {setInfoTrip,setInfoContact,fetch_data_flights};