"use client";

import { useState } from 'react';
import styles from './EventPage.module.css';
import data from "./mock-data.json";



export default function EventPage() {

    const [events, setEvents] = useState(data);
    return (
        <>
            <div className={styles.appcontainer}>

                <table>

                    <thead>

                        <tr>
                            <th>Event Name </th>
                            <th> Date </th>
                            <th> Created By </th>
                            <th> Status </th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) =>
                            <tr>
                                <td>{event.eventTitle}</td>
                                <td>{event.date}</td>
                                <td>{event.createdBy}</td>
                                <td>{event.status}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>







        </>
    )
}