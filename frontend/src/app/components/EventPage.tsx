"use client";

import { useState, Fragment, SetStateAction } from 'react';
import styles from './EventPage.module.css';
import data from "./mock-data.json";
import ReadOnlyRow from './ReadOnlyRow'
import EditRows from './EditRows';



const EventPage = () => {

    const [eventdatas, setEventDatas] = useState(data);

    const handleEditClick = (event, eventdata) => {
        event.preventDefault;
        setEditContactId(eventdata.id);
    }

    const [editContactId, setEditContactId] = useState(null);
    return (
        <>
            <div className={styles.appcontainer}>

                <form>

                    <table>

                        <thead>

                            <tr>
                                <th>Event Name </th>
                                <th> Date </th>
                                <th> Created By </th>
                                <th> Status </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {eventdatas.map((eventdata) => (
                                <Fragment>
                                    {editContactId === eventdata.id ? <EditRows /> : <ReadOnlyRow eventdata={eventdata} handleEditClick={handleEditClick} />}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </form>
            </div>







        </>
    )
}
export default EventPage