import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../Components/style.css';
import 'boxicons';

function Farmer() {
    const [farmers, setFarmers] = useState([]);

    useEffect(() => {
      axios.get('/farmer/all')
        .then(response => {
          setFarmers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    return (
        <div>
        <h2 className="heading">Farmer List</h2>
        <h3 className="heading">We are farmers!</h3>
        <table className="farmer-table">
            <thead>
                <tr>
                <th>Farmer ID</th>
                <th>Ad-Soyad</th>
                <th>Adres</th>
                <th>Telefon</th>
                <th>Mail</th>
                </tr>
            </thead>
            <tbody>
            {farmers.map(farmer => (
                        <tr key={farmer.id}>
                            <td>{farmer.id}</td>
                            <td>{farmer.name}</td>
                            <td>{farmer.address}</td>
                            <td>{farmer.phone_number}</td>
                            <td>{farmer.email}</td>
                        </tr>
                        ))}
            </tbody>
            </table>
      </div>
      
    );
}
export default Farmer;

