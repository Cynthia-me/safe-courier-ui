import React ,{useState} from 'react'

import "../Styles/SignUpForm.css";
import axios from 'axios'

function ParcelOrder() {
  const [postData, setPostData] = useState({
    parcelItem: '', parcelWeight : '',From : '', To : ''
  });
 

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:4000/api/v2/parcels`,{parcelItem: postData.parcelItem,parcelWeight: postData.parcelWeight,From: postData.From,To: postData.To}).then(res=>{
      console.log(res);
      console.log(res.data)
    })
  }
  const clear = () =>{

  }
    return (
        <div className = "form-container">
            <form  onSubmit = {handleSubmit}>  
                  <h1>PARCEL DELIVERY ORDER</h1>
                  <label>
                  <p>Parcel item:</p>
                <input type='text' name='parcelItem'
                label='parcelItem'
                value = {postData.parcelItem}
                onChange = {(e) => setPostData({...postData,parcelItem: e.target.value})}/>
                </label>

                <label>
                <p>Parcel Weight:</p>
                <input type='text' name='parcelWeight'
                label='parcelWeight'
                value = {postData.parcelWeight}
                onChange = {(e) => setPostData({...postData,parcelWeight: e.target.value})}/>
                  </label>
                  
                  <label>
                  <p>Parcel pickup station</p>
                <input type='text' name='From'
                label='From'
                value = {postData.From}
                onChange = {(e) => setPostData({...postData,From: e.target.value})}/>
                  </label>
                  
                  <label>
                  <p>Parcel destination:</p>
                <input type='text' name='To'
                label='To'
                value = {postData.To}
                onChange = {(e) => setPostData({...postData,To: e.target.value})}/>
                  </label>
                <button type = "submit">PLACE DELIVERY ORDER</button>
                <button onClick = {clear}>CLEAR</button>
        </form>
          </div>
        
    )
}

export default ParcelOrder
