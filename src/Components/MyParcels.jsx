import React, {useState,useEffect} from 'react'
// import { useSelector } from 'react-redux';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import "../Styles/styles.css"

function MyParcels() {
const [parcels,setParcels] = useState([]);

useEffect(() => {
    axios({
        method: 'GET',
        url: 'http://localhost:4000/api/v2/parcels'
    }).then(res=>{
            setParcels(res.data.allParcels)
        // console.log(res.data.allParcels)  
    })
}, [setParcels])
    return (
        <div className = "parcel-table">
            {console.log(parcels)}
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th scope="col">Parcel Item</th>
                                <th scope="col">Parcel Weight</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {parcels.map((parcel) => (
                                <tr key={parcel._id}>
                                    <td>{parcel.parcelItem}</td>
                                    <td>{parcel.parcelWeight}</td>
                                    <td>{parcel.From}</td>
                                    <td>{parcel.To}</td>
                                    <td><button>EDIT</button></td>
                                </tr>
                                // console.log(parcel)
                            ))}
                        </tbody>
                        </Table>
       </div>
    )
}

export default MyParcels
