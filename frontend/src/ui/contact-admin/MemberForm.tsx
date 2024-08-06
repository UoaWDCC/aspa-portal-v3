'use client';

import React from 'react';
import { useState } from 'react';
import styles from './MemberForm.module.css';

function MemberForm(){
    const [formData, setFormData] = useState({execName: "", execTitle: ""})

    const handleChange = (event: React.ChangeEvent<any>) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = (event: React.ChangeEvent<any>) => {
        alert(`Popup for adding a new executive member with name: ${formData.execName} and title: ${formData.execTitle}`)
    }

  return (
    <div className={styles.memberFormBg}>
        <form onSubmit={handleSubmit}>
            <label style={{fontSize:"50px", alignSelf:"center", paddingLeft:"0px"}}>Name of Executive Member:</label>
                <input 
                className = {styles.input}
                type="text"
                id="execName"
                name="execName"
                value={formData.execName}
                onChange={handleChange}
                />
            <label>Executive Member Title:</label>
                <input 
                className = {styles.input}
                type="text"
                id="execTitle"
                name="execTitle"
                value={formData.execTitle}
                onChange={handleChange}
                />
            <label>Add Image:</label>
                <textarea 
                className = {styles.input}
                onChange={handleChange}
                />
            <button style={{fontSize:"30px", height:"50px", maxWidth:"315px", paddingBottom:"0"}}>UPLOAD IMAGES</button>
            <button onClick={handleSubmit}>Upload Executive Member</button>
        </form>
    </div>
  )
}

export default MemberForm