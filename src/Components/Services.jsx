import React from 'react'
import "../Styles/Services.css"
import '../Styles/Header.css';
import {Link} from "react-router-dom"
function Services() {
    return (
        <div>
            <div className = "hme">
                <img src = "https://images.unsplash.com/photo-1484689228555-fd6bc1b28b7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc3fHx5ZWxsb3clMjB2YW5zfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt = "delivery"></img>
            </div>
            <div className = "service_details">
            
            <h2>100% PARCEL CARE</h2>
           
            <div className = "services_options">
            <Link to = '/parcelOrder'><p style = {{cursor:"pointer"}}>Send a parcel</p></Link>
            <p style = {{cursor:"pointer"}}>Receive a parcel</p>
            <p style = {{cursor:"pointer"}}>Help and advice</p>
            <p style = {{cursor:"pointer"}}>Business parcels</p>
        </div>
        </div>
        </div>
        
        
    )
}

export default Services
