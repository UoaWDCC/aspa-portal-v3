"use client";

import { useState, Fragment, SetStateAction } from 'react';
import styles from './EventPage.module.css';
import data from "./mock-data.json";
import ReadOnlyRow from './ReadOnlyRow'
import EditRows from './EditRows';



const EventPage = () => {

    const [eventdatas, setEventDatas] = useState(data);

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedEventData = {
            id: editContactId,
            eventTitle: editFormData.eventTitle,
            date: editFormData.date,
            createdBy: editFormData.createdBy,
            status: editFormData.status
        };

        const newEventDatas = [...eventdatas];

        const index = eventdatas.findIndex((eventdata) => eventdata.id === editContactId)

        newEventDatas[index] = editedEventData;

        setEventDatas(newEventDatas)
        setEditContactId(null)

    }

    const handleEditClick = (event, eventdata) => {
        event.preventDefault();
        setEditContactId(eventdata.id);

        const formValue = {
            eventTitle: eventdata.eventTitle,
            date: eventdata.date,
            createdBy: eventdata.createdBy,
            status: eventdata.status,
        }
        setEditFormData(formValue);
    }

    const [editFormData, setEditFormData] = useState({
        eventTitle: "",
        date: "",
        createdBy: "",
        status: "",
    })

    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData)
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    }

    const handleDeleteClick = (eventdataID) => {
        const newEventDatas = [...eventdatas];
        const index = eventdatas.findIndex((eventdata) => eventdata.id === eventdataID)

        newEventDatas.splice(index, 1)

        setEventDatas(newEventDatas)

    }

    const [editContactId, setEditContactId] = useState(null);

    const [searchParam, setSearchParam] = useState('');

    const handleSearchChange = (event) => {
        setSearchParam(event.target.value);
    }

    const filteredEventDatas = eventdatas.filter((eventdata) =>
        eventdata.eventTitle.toLowerCase().includes(searchParam.toLowerCase())
    );



    return (
        <>
            <div className={styles.appcontainer}>
                <h1 className={styles['table-header']}>All Events</h1>

                <div className={styles['search-bar']}>
                    <input
                        className={styles['search-input']}
                        type='text'
                        placeholder='Search Event'
                        value={searchParam}
                        onChange={handleSearchChange}
                    />
                </div>

                <hr className={styles['solid-line']}></hr>

                <form onSubmit={handleEditFormSubmit}>

                    <table className={styles['event-table']}>

                        <thead>

                            <tr>
                                <th className={styles['event-title']}>Event Name </th>
                                <th className={styles['event-title']}> Date </th>
                                <th className={styles['event-title']}> Created By </th>
                                <th className={styles['event-title']}> Status </th>
                                <th className={styles['event-title']}> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEventDatas.map((eventdata) => (
                                <Fragment key={eventdata.id}>
                                    {editContactId === eventdata.id ? (
                                        <EditRows
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />
                                    ) : (
                                        <ReadOnlyRow
                                            eventdata={eventdata}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                    )}
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