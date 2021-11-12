import React, { useState } from 'react';
// import Input from '../Utils/Input';


    
const Personal = ({ personalInfo, onChange }) => {


    return(
        
        <div>
            <form>
                <input 
                    name="firstName" 
                    placeholder="First Name" 
                 />
                <input name="lastName" placeholder="Last Name"  />
                <input name="title" placeholder="Title" />
                <input name="address" placeholder="Address" />
                <input name="phoneNumber" placeholder="Phone Number" />
                <input name="email" placeholder="Email" />
                <input name="description" placeholder="Description" />
            </form>
        </div>
    )
}

export default Personal;