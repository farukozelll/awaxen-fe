import React, { useState, useEffect } from 'react';

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
        <div className='farmer'>
        <h2 className="heading">Farmer List</h2>
        <h3 className="heading">We are farmers!</h3>
        <table className="farmer-table">
            <thead>
                <tr>
                <th>ID</th>
                <th>Adı</th>
                <th>Kullanıcı Adı</th>
                <th>E-posta</th>
                <th>Şifre</th>
                <th>TC Kimlik No</th>
                <th>Doğum Tarihi</th>
                <th>Adres</th>
                <th>Ülke</th>
                <th>Cinsiyet</th>
                <th>Telefon Numarası</th>
                <th>Bölge</th>
                <th>Posta Kodu</th>
                <th>Sosyal Medya Hesapları</th>
                </tr>
            </thead>
            <tbody>
            {farmers.map(farmer => (
                        <tr key={farmer.id}>
                          <td>{farmer.id}</td>
                          <td>{farmer.name}</td>
                          <td>{farmer.username}</td>
                          <td>{farmer.email}</td>
                          <td>{farmer.password}</td>
                          <td>{farmer.national_id}</td>
                          <td>{farmer.date_of_birth}</td>
                          <td>{farmer.address}</td>
                          <td>{farmer.country}</td>
                          <td>{farmer.gender}</td>
                          <td>{farmer.phone_number}</td>
                          <td>{farmer.region}</td>
                          <td>{farmer.zip_code}</td>
                          <td>{farmer.social_media}</td>
                        </tr>
            ))}
            </tbody>
            </table>
      </div>
      
    );
}
export default Farmer;

