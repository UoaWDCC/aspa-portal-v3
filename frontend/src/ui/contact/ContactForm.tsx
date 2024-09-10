'use client';

import React, { useState, useEffect } from 'react';
import styles from './contacts.module.css';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", query: "" });

    useEffect(() => {
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    
        if (publicKey) {
          emailjs.init(publicKey);
          console.log('EmailJS initialized');
        } else {
          console.error('EmailJS public key is missing');
        }
      }, []); // Only initialize on mount

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        emailjs.send('service_2mww168', 'template_714x2nh', {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            query: formData.query,
        })
        .then(response => {
            alert('Thank you for submitting your query, we will get back to you as soon as possible.');
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch(err => {
            console.error('FAILED...', err);
        });
    };

    return (
        <div className={styles.queryFormBorder}>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />

            <div className={styles.queryFormBg}>
                <h1>Inquiry Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.queryFormRow}>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                                className="form-control"
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="query">How may we assist you?:</label>
                            <textarea
                                className="form-control"
                                id="query"
                                name="query"
                                value={formData.query}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;