import React, { useState } from 'react'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import Passengers from './Passengers';
import { setInfoTrip } from '../actions';
import { Link } from 'react-router-dom';

function Reservation() {
    const [nbrElementsToShow , setNbrElementsToShow] = useState({airline:4, stops: 3, type:4});
    const flights = useSelector((state)=>state.flights);
    const  infoTrip = useSelector((state)=>state.infoTrip);
  const {type:typeTrip,from,to,date_depart,date_Arrive} = infoTrip;
  const dispatch = useDispatch();
    // function getDurationOfFlight(startTime, endTime) {
    //     const [startHours, startMinutes] = startTime.split(":").map(Number);
    //     const [endHours, endMinutes] = endTime.split(":").map(Number);
    
    //     let start = startHours * 60 + startMinutes;
    //     let end = endHours * 60 + endMinutes;

    //     if (end < start) {
    //         end += 24 * 60;
    //     }
    
    //     let diff = end - start;
    //     let hours = Math.floor(diff / 60);
    //     let minutes = diff % 60;
    
    //     return { hours, minutes };
    // }
    const minPrice = getMinAndMaxValue('price').min ;
    const maxPrice = getMinAndMaxValue('price').max ;
    // const minDuration = Math.min(...getMinAndMaxDuration()) ;
    // const maxDuration = Math.max(...getMinAndMaxDuration()) ;
    
    const [filters, setFilters] = useState({
        stops: [],
        airlines: [],
        types: [],
        minPrice: null,
        maxPrice: maxPrice,
        minDuration: null,
        maxDuration: null
      });
    function filterFlights() {
        return flights.filter(flight => 
          (filters.stops.length === 0 || filters.stops.includes(flight.stops)) &&
          (filters.airlines.length === 0 || filters.airlines.includes(flight.airline)) &&
          (filters.types.length === 0 || filters.types.includes(flight.type)) &&
          (filters.minPrice === null || flight.price >= filters.minPrice) &&
          (filters.maxPrice === null || flight.price <= filters.maxPrice) &&
          (filters.minDuration === null || flight.duration >= filters.minDuration) &&
          (filters.maxDuration === null || flight.duration <= filters.maxDuration)
        );
      }      
      const handleCheckboxChange = (category, value) => {
        setFilters(prevFilters => ({
          ...prevFilters,
          [category]: category === 'stops' || category === 'airlines' || category === 'types' ?
          prevFilters[category].includes(value)
            ? prevFilters[category].filter(v => v !== value)
            : [...prevFilters[category], value]
            :
            value
        }));
      };
    
      const filteredFlights = filterFlights();
    function removeDuplicates(key) {
        return [...new Set(flights.map((item)=>item[key]))];
    }
    
    function getMinAndMaxValue(key) {
        return {max:Math.max(...removeDuplicates(key)),min:Math.min(...removeDuplicates(key))};
    }
    function getElements(array, count) {
        return array.slice(0, count);

    }
    const listStops = removeDuplicates('stops');
    const listAirlines = removeDuplicates('airline');
    const listFlightType = removeDuplicates('type');
    
    
    
  return (
    <div className='bg-[#FCFDFF]'>
        <header>
            <form onSubmit={(event)=>event.preventDefault()} className='space-y-6 px-12'>
                <div className="container text-gray-800 grid grid-cols-1 sm:grid-cols-2 space-y-3 items-center">
                    <div className='type-route flex  items-center gap-5'>
                        <div className="title capitalize text-2xl font-semibold">choose your Route</div>
                        <div className='text-xl flex gap-10 sm:gap-14'>
                            <div className='flex items-center'><input type="radio" name="route" id="one-way" value={'one-way'} className='mr-2 w-5 h-5' onChange={(e)=>dispatch(setInfoTrip({type:e.target.value}))}/>One-way</div>
                            <div className='flex items-center'><input type="radio" name="route" id="Round-Trip" value={'round-trip'} checked={typeTrip==='round-trip' ? true : false} className='mr-2 w-5 h-5' onChange={(e)=>dispatch(setInfoTrip({type:e.target.value}))}/>Round Trip</div>
                        </div>
                    </div>
                    <div className="passengers justify-between flex items-center">
                        <div className="title capitalize text-2xl font-semibold">passengers number</div>
                        <Passengers/>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-5 mb-5'>
                    <div className={`info-flight-container w-full grid ${typeTrip==='round-trip' ? 'grid-cols-4':'grid-cols-3'} gap-2`}>
                        <div className='bg-white px-3 py-1.5 md:p-3 col-span-4 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                            <label htmlFor="from" className='text-[#1E3A8A] text-lg font-bold'>From <FontAwesomeIcon icon={faPlaneDeparture}/></label><br />
                            {/* input of From destination */}
                            <input type="text" name="form" id="from" placeholder='Country, city or airport' value={from} onChange={(e)=> dispatch(setInfoTrip({from:e.target.value}))} className='w-full outline-none placeholder:text-[#4B5563] text-gray-600 text-lg indent-1'/>
                        </div>
                        <div className='to-destination-container bg-white px-3 py-1.5 md:p-3 col-span-4 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                            <label htmlFor="to" className='text-[#1E3A8A] text-lg font-bold'>To <FontAwesomeIcon icon={faPlaneArrival}/></label><br />
                            {/* input of To destination */}
                            <input type="text" name="to" id="to" placeholder='Country, city or airport' value={to} onChange={(e)=> dispatch(setInfoTrip({to:e.target.value}))} className='to w-full outline-none placeholder:text-[#4B5563] text-gray-600 text-lg indent-1'/>
                        </div>
                            <div className='bg-white px-3 py-1.5 md:p-3 col-span-2 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                                <label htmlFor="depart" className='text-[#1E3A8A] text-lg font-bold '>Date Depart <FontAwesomeIcon icon={faCalendar}/></label><br />
                                {/* input of Depart destination */}
                                <input type="date" name="depart" id="depart" value={date_depart} onChange={(e)=> dispatch(setInfoTrip({date_depart:e.target.value}))} className='w-full outline-none text-[#4B5563] text-lg'/>
                            </div>
                            {typeTrip==='round-trip' &&
                            <div className='bg-white px-3 py-1.5 md:p-3 col-span-2 md:col-span-2 lg:col-span-1 rounded-lg shadow-md'>
                                <label htmlFor="return" className='text-[#1E3A8A] text-lg font-bold '>Date Return <FontAwesomeIcon icon={faCalendar}/></label><br />
                                {/* input of Return destination */}
                                <input type="date" name="return" id="return" value={date_Arrive} onChange={(e)=> dispatch(setInfoTrip({date_Arrive:e.target.value}))} className='w-full outline-none text-[#4B5563] text-lg'/>
                            </div>}
                    </div>
                    <button className='text-white md:text-blue-800 md:hover:text-white  font-bold border-2 border-[#1158C2] bg-[#1158C2] md:bg-transparent hover:bg-[#1158C2]  px-9 py-3 rounded-xl shadow-md'>Search</button>
                </div>
            </form>
        </header>
        {flights.length === 0 || from.trim()==='' || to.trim()==='' || date_depart.trim()==='' || date_Arrive.trim()==='' ?
        <div className='h-[70vh] px-32 flex items-center text-center text-3xl text-gray-500'>
        Please fill in all the required fields to view the available flights. Missing information may prevent us from finding the best options for you!
        </div>:
        <main className='px-12 py-8 bg-[#FCFDFF]'>
            <div className="content flex justify-between items-center gap-5 mt-10">
                <div className="filter-container w-72">
                    <div className="title capitalize">filter by</div>
                    <div className="content bg-white mt-5 border-2 rounded-md">
                        <div className="stops p-5 text-lg border-b">
                            <div className="ttile font-medium">Stops</div>
                            {listStops.includes(0) && <><input type="checkbox" name="direct" id="direct" onClick={()=>handleCheckboxChange('stops',0)}/> Direct <br /></>}
                            {getElements(listStops,nbrElementsToShow.stops).map((item ,index)=>item !== 0 && <React.Fragment key={index}>
                                <input type="checkbox" name={item.stops+'_stop'} id={item+'_stop'} onClick={(event)=>handleCheckboxChange('stops',item)}/> 
                                {`${item} ${item === 0 ? 'stops' : 'stop'}`} <br />
                                {index === 2 && nbrElementsToShow.stops === 3 && listStops.length > 3 ? (
                                    <button 
                                        onClick={() => setNbrElementsToShow({...nbrElementsToShow,stops:listStops.length})}
                                        className='text-teal-600'
                                    >See All</button>
                                        ): (index === listStops.length - 1 && nbrElementsToShow.stops > 3) && (
                                    <button
                                        onClick={() => setNbrElementsToShow({...nbrElementsToShow,stops:3})}
                                        className='text-teal-600'
                                    >Hide</button>
                                )}
                                </React.Fragment>)}
                        </div>
                        <div className="price p-5 text-lg border-b">
                            <div className="title font-medium">Price</div>
                            <div className="range">between  {minPrice} $ - {filters.maxPrice} $</div>
                            <input type="range" name="range-price" id="range-price" min={minPrice} max={maxPrice} value={filters.maxPrice} onChange={(e)=>handleCheckboxChange('maxPrice',e.target.value)} className='w-full'/>
                        </div>
                        <div className="airlines p-5 text-lg border-b">
                            <div className="title font-medium">Airlines</div>
                            {getElements(listAirlines,nbrElementsToShow.airline).map((airline,index)=>(
                                <React.Fragment key={index} >
                                    <input type="checkbox" name={airline} id={airline} onChange={()=>handleCheckboxChange('airlines',airline)}/> {airline} <br />
                                    {(index === 3 && nbrElementsToShow.airline === 4 && listAirlines.length > 4) ? (
                                        <button 
                                            onClick={() => setNbrElementsToShow({...nbrElementsToShow,airline:listAirlines.length})} 
                                            className="text-teal-400"
                                        >
                                            See all
                                        </button>
                                    ) : (index === listAirlines.length - 1 && nbrElementsToShow.airline >= 4 && listAirlines.length !== 4) ? (
                                        <button 
                                            onClick={() => setNbrElementsToShow({...nbrElementsToShow,airline:4})} 
                                            className="text-teal-400"
                                        >
                                            Hide
                                        </button>
                                    ) : null}
                                </React.Fragment>
                            ))
                            }

                        </div>
                        <div className="flight-type p-5 text-lg border-b">
                            <div className="title font-medium">Flight Type</div>
                            {listFlightType.map((item,index)=><React.Fragment key={index}>
                                <input type="checkbox" name={item} id={item} onChange={()=>handleCheckboxChange('types',item)}/> {item} <br />
                            </React.Fragment>
                            )}
                        </div>
                        <div className="duration p-5 text-lg border-b">
                            <div className="title font-medium">Duration</div>
                            <input type="range" name="range-price" id="range-price" className='w-full' />
                            <div className="range">2h30min - 6h20min</div>
                        </div>
                    </div>
                </div>
                <div className="flights-container w-full  overflow-hidden">
                    <div className="title capitalize">{filteredFlights.length ===0 ? 'no resault': `${filteredFlights.length} resualts found`}</div>
                    <div className="content overflow-y-auto mt-5 px-3 flex flex-col gap-4 h-[810px]">
                        {filteredFlights.map((flight,index)=>
                        <div key={index} className="flight px-5 py-5 flex justify-between items-center bg-white shadow-md rounded-2xl ">
                            <div className="bard-flight">
                                <img src={flight.logo} alt="" className='w-20 h-20'/>
                                <div className="name-plane text-center text-xl capitalize font-medium">{flight.airline}</div>
                            </div>
                            <div className="flight-details flex justify-between items-center">
                                <div className="departure-container font-medium text-center text-lg">
                                    <div className="time">{flight.heure_depart}</div>
                                    <div className="place capitalize">{flight.departure_place}</div>
                                </div>
                                <div className='flex justify-between items-center mx-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="#2569CE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.5 6.5l3-2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3L20 17l-2.5 2.55L14 13l-3 3v3l-2 2l-1.5-4.5L3 15l2-2h3l3-3l-6.5-3.5L7 4z"></path></svg>
                                    <div className="line-duration-stops-container w-52 mx-3 text-center">
                                        <div className="duration">{`${flight.duration.hours}h ${flight.duration.minutes}min`}</div>
                                        <hr className=' border-dashed'/>
                                        <div className="stops"> {flight.stops === 0 ?'Direct':flight.stops === 1 ? `${flight.stops} stop`:`${flight.stops} stops`}</div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className="rotate-90" viewBox="0 0 24 24"><path fill="none" stroke="#2569CE" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.5 6.5l3-2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3L20 17l-2.5 2.55L14 13l-3 3v3l-2 2l-1.5-4.5L3 15l2-2h3l3-3l-6.5-3.5L7 4z"></path></svg>
                                </div>
                                <div className="arrive-container font-medium text-center text-lg">
                                    <div className="time">{flight.heure_arrive}</div>
                                    <div className="place capitalize">{flight.arrival_place}</div>
                                </div>
                            </div>
                            <div className="price-book-container">
                                <div className="price text-center text-3xl text-[#51D4C0] font-bold">{flight.price} $</div>
                                <button className='font-medium  mt-3 outline-none border-2 text-teal-400 border-teal-300 px-3.5 py-1 rounded-xl hover:scale-105'><Link to={`/reservation/${flight.id}`}>book now</Link></button>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </main>}
      <Footer/>
    </div>
  )
}

export default Reservation;