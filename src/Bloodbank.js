import React, { useState } from 'react';
import './Bloodbank.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';

const DEFAULT_DONORS = [
  { id: 1, name: 'John Smith',name1:'Steve Rogers', bloodType: 'A+' ,},
  { id: 2, name: 'Jane Doe',name1:'Peter Parker', bloodType: 'B+' },
  { id: 3, name: 'Bob Johnson',name1:'Tony Starks', bloodType: 'O+' },
  { id: 4, name: 'Alice Smith',name1:'Natasha', bloodType: 'AB+' },
];

function Bloodbank() {
  const [bloodType, setBloodType] = useState('');
  const [donors, setDonors] = useState([]);

  function handleSearch() {
    // Filter the list of default donors by blood type
    const filteredDonors = DEFAULT_DONORS.filter(
      (donor) => donor.bloodType === bloodType
    );
    setDonors(filteredDonors);
  }

  return (
    <div className='box'>
        <nav className='justify-content-between'>
            <h4>Mansahaai</h4>
            
      
              <Link to="/" className="btn btn-light" >
                Home
              </Link>
        </nav>
        
      <h1>Welcome to the Blood Bank</h1>
      
      <h5>
        Please select a blood type from the list below to see available donors:
      </h5>
      <ul>
        <li
          className={bloodType === 'A+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('A+');
            handleSearch();
          }}
        >
          <Button variant="outlined">A+</Button>
        </li>
        <li
          className={bloodType === 'B+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('B+');
            handleSearch();
          }}
        >
         <Button variant="outlined" >B+</Button>
        </li>
        <li
          className={bloodType === 'O+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('O+');
            handleSearch();
          }}
        >
          <Button variant="outlined" >O+</Button>
        </li>
        <li
          className={bloodType === 'AB+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('AB+');
            handleSearch();
          }}
        >
          <Button variant="outlined">AB+</Button>
        </li>
      </ul>
      {bloodType && (
        <div className='box1'>
          <h2>Available Donors with Blood Type {bloodType}:</h2>
          {donors.length > 0 ? (
            <ul>
              {donors.map((donor) => (
                <>
                <div className='box-shadow d-flex p-3 align-items-center'>
                <li className="p-3" key={donor.id}>{donor.name}</li>
                <CallIcon className='svg_icons'/>
                </div>
                <div className='box-shadow d-flex p-3 align-items-center'>
                <li className="p-3" key={donor.id}>{donor.name1}</li>
                <CallIcon className='svg_icons'/>
                </div>
               
                </>
              ))}
            </ul>
          ) : (
            <p>No donors found with blood type {bloodType}.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Bloodbank;
