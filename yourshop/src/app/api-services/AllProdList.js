
import React from 'react'
import axios from 'axios';

export default function proCat() {
  return axios.get('https://wscubetech.co/ecommerce-api/categories.php')
        .then((res) => res.data)
        .then( (finalresp) => {
            return finalresp.data;
        });
  
}