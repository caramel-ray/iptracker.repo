import React from 'react'

const TrackerInfoDisplay = (props) => {
    const {ip, location, timezone, isp} = props
    return (
        <div className="info-display">
            <div className="card">
             <p>IP ADDRESS</p>
             <h2>{ip}</h2>
            </div>
            <div className="card">
             <p>LOCATION</p>
             <h2>{location}</h2>
            </div>
            <div className="card">
             <p>TIMEZONE</p>
             <h2>{timezone}</h2>
            </div>
            <div className="card">
             <p>ISP</p>
             <h2>{isp}</h2>
            </div>
        </div>
    )
}

export default TrackerInfoDisplay
