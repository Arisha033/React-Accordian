import React from 'react'
import phoneIcon from '../assets/phone-icon.png'
import mailIcon from '../assets/mail-icon.png'
import catImage from "../assets/mr-whiskerson.png"

export const Contact = (props) => {
  return (
    <>
        <div className="contact-card">
            <img src={catImage} alt={props.name} />
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