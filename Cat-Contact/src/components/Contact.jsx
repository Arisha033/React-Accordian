import React from 'react'
import phoneIcon from '/phone-icon.png'
import mailIcon from '/mail-icon.png'

export const Contact = (props) => {
  return (
    <>
        <div className="contact-card">
          {/* changes in image path */}
            <img src= {props.img} alt={props.name} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} alt='phone-icon' />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} alt='mail-icon' />
                <p>{props.mail}</p>
            </div>
        </div>
    </>
  ) 
}