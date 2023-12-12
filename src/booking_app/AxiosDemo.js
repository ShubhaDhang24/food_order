import React, { useState } from "react";
import axios from "axios";
import './AxiosDemo.css';

const AxiosDemo = () => {
  const baseUrl = "http://localHost:8080";

  const [bookings, setBookings] = useState([]);

  const getBookingsClickHandler = async () => {
    console.log("executed button click");
    const resourceUrl = "/api/v1/booking/from/2023-12-13/to/2023-12-14";

    await axios
      .get(baseUrl + resourceUrl)
      .then((response) => {
        console.log("RESPONSE", response);
        if (response.status === 200) {
          console.log("DATA", response.data);
          setBookings(response.data);
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });

    console.log("end ");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="header">Axios and Router</h2>
          <h2 className="body">Get all bookings</h2>

          <button
            className="btn btn-info"
            type="button"
            onClick={getBookingsClickHandler}
          >
            Get Bookings
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {bookings && bookings.length !== 0 && (
            <h2 className="mb-4">Booking List</h2>
          )}
          <div className="row">
            {
              (bookings.map = (booking) => (
                <div className="card mb-4 col-mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{booking.dateTime}</h5>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiosDemo;
