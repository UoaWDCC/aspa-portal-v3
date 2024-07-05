'use client';

import React from 'react';
import { useState } from 'react';
import styles from './contacts.module.css';

function ContactForm(){
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", query: ""})

    const handleChange = (event: React.ChangeEvent<any>) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}))
    }

    const handleSubmit = (event: React.ChangeEvent<any>) => {
        alert(`Thank you for submitting your query, we will get back to you as soon as possible.`)
    }

  return (
    <div className={styles.queryFormBorder}>
        <div className={styles.queryFormBg}>
            <h1>Inquiry Form</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.queryFormRow}>
                    <div className={styles.names}>
                        <label>First Name:</label>
                            <input
                            className = {styles.input1}
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            />
                    </div>
                    <div className={styles.names}>
                        <label>Last Name:</label>
                            <input 
                            className = {styles.input1}
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}  
                            />
                    </div>
                </div>
                <label>Email:</label>
                    <input 
                    className = {styles.input2}
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                <label htmlFor="query">How may we assist you?:</label>
                    <textarea 
                    className = {styles.input3}
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactForm