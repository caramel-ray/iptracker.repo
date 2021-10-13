import React, { useState, useEffect } from 'react'
import ArrowIcon from '../assets/images/icon-arrow.svg'

const Trackerform = (props) => {
    const { getTrackingInfo } = props


const [payLoad, setPayLoad] = useState('');


const requestData =  (event) => {
    event.preventDefault();

    let requestType = ''

    
    // Check for IP Address and domain name
    let dots = 0;
    for (let i = 0; i < payLoad.length; i++) {
        if (payLoad[i] === '.') {
            dots++;
        }
    }
    
    if (dots === 3) {
        requestType = 'ipAddress'
    } else {
        requestType = 'domain'
    }

    //    check for email
        if (payLoad.includes('@') && payLoad.includes('.')) {
            requestType = 'email'
        }

    // Making the request
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_mlpuGqaSYbsgycauEVeT5HoBP045z&${requestType}=${payLoad}`)
    .then(response => response.json())
    .then(data => {
       getTrackingInfo(data);
    })
    .catch(err => {
        console.log(err);
    })
}

    return (
        <div>
            <form onSubmit={requestData}>
                <input type="text" placeholder="Search for any IP address or domain" onChange={(e) => setPayLoad(e.target.value)} />
                <button>
                    <img src={ArrowIcon} alt="" />
                </button>          
            </form>
        </div>
    )
}

export default Trackerform
