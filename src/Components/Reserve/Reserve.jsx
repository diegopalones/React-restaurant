import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Reserve.css";

export const BookingForm = () => {
  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    date: "",
    time: "",
    attendees: ""
  });

const [btnDisabled, setBtnDisabled] = useState(true);
const [message, setMessage] = useState("");
let navigate = useNavigate();

const initialState = {
  name: "",
  email: "",
  phonenumber: "",
  date: "",
  time: "",
  attendees: "",
};

const clearState = () => {
  setData({ ...initialState });
};

const handleInputChange = (event) => {
  if (data.name.length + 1 < 3) {
    setMessage("Name must be at least 3 characters");
    setBtnDisabled(true);
  } else {
    setMessage(null);
    setBtnDisabled(false);
  }
  setData({
    ...data,
    [event.target.name]: event.target.value,
  });
};
const handleSubmit = (event) => {
  event.preventDefault();
  console.log("sending data..." + data.name + " " + data.email);
  saveResults(data);
  clearState();
  setMessage("form completed sucessfuly");
  setTimeout(() => {
    navigate("/");
  }, 3000);
};



  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="name"
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
      />

      <input
        className="phonenumber"
        type="phonenumber"
        placeholder="Phone Number"
        value={data.phonenumber}
        onChange={handleInputChange}
        name="phonenumber"
      />
      <input
        className="date"
        type="date"
        placeholder="Date/Month/Year"
        value={data.date}
        onChange={handleInputChange}
        name="date"
        min={new Date().toISOString().split("T")[0]}
      />
      <input
        className="time"
        type="time"
        placeholder="Time"
        value={data.time}
        onChange={handleInputChange}
        name="time"
      />
      <button className="button" type="submit" disabled={btnDisabled}>
        Submit
      </button>
      {message}
    </form>
  );
}
export default BookingForm;

function getSavedData() {
  const usersDb = localStorage.getItem("results"); 
  const dataArray = JSON.parse(usersDb) || [];
  return dataArray;
}
getSavedData();
function saveResults(data) {
  const database = {
    name: data.name,
    phonenumber: data.phonenumber,
    date: data.date,
    time: data.time,
    attendees: data.attendees
  }; 
  const lc = getSavedData();
  const ls = lc.push(database);
  localStorage.setItem("results", JSON.stringify(lc)); 
}