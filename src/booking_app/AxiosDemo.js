import React, { useState } from 'react';

const AxiosDemo = () => {

    const [bookings, setBookings]=useState([]);
    

    const getBookingsClickHandler=()=>{
        console.log("executed button click");

        console.log("end ");

    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h2>Axios and Router</h2>
                    <h2>Get all bookings</h2>

                    <button className='btn btn-info' type='button'onClick={getBookingsClickHandler}>Get Bookings</button>
                    
                </div>
                </div>
            
        </div>
    );
};

export default AxiosDemo;