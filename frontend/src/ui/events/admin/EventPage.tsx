"use client";

import { useState, Fragment, useMemo, useEffect, ChangeEvent, FormEvent, MouseEvent } from 'react';
import styles from './EventPage.module.css';
import data from "./mock-data.json";
import ReadOnlyRow from './ReadOnlyRow';
import EditRows from './EditRows';
import Pagination from './Pagination';

interface Event {
    id: number;
    eventTitle: string;
    date: string;
    createdBy: string;
    status: string;
}

const EventPage: React.FC = () => {

    const [eventdatas, setEventDatas] = useState<Event[]>(data);

    const [editFormData, setEditFormData] = useState({
        eventTitle: "",
        date: "",
        createdBy: "",
        status: "",
    });

    const [editContactId, setEditContactId] = useState<number | null>(null);

    const [searchParam, setSearchParam] = useState('');

    const [currentPage, setCurrentPage] = useState(1);

    const PageSize = 10;

    const handleEditFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (editContactId === null) return;

        const editedEventData: Event = {
            id: editContactId,
            eventTitle: editFormData.eventTitle,
            date: editFormData.date,
            createdBy: editFormData.createdBy,
            status: editFormData.status
        };

        const newEventDatas = [...eventdatas];
        const index = eventdatas.findIndex((eventdata) => eventdata.id === editContactId);
        newEventDatas[index] = editedEventData;

        setEventDatas(newEventDatas);
        setEditContactId(null);
    }

    const handleEditClick = (event: MouseEvent<HTMLButtonElement>, eventdata: Event) => {
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

    const handleEditFormChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name') as string;
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }

    const handleCancelClick = () => {
        setEditContactId(null);
    }

    const handleDeleteClick = (eventdataID: number) => {
        const newEventDatas = [...eventdatas];
        const index = eventdatas.findIndex((eventdata) => eventdata.id === eventdataID);
        newEventDatas.splice(index, 1);

        setEventDatas(newEventDatas);
    }

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchParam(event.target.value);
    }


    useEffect(() => {
        setCurrentPage(1);
    }, [searchParam]);

    const filteredEventDatas = eventdatas.filter((eventdata) =>
        eventdata.eventTitle.toLowerCase().includes(searchParam.toLowerCase())
    );

    const currentEventDatas = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredEventDatas.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredEventDatas]);

    return (
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

            <hr className={styles['solid-line']} />

            <form onSubmit={handleEditFormSubmit}>
                <table className={styles['event-table']}>
                    <thead>
                        <tr>
                            <th className={styles['event-title']}>Event Name</th>
                            <th className={styles['event-title']}>Date</th>
                            <th className={styles['event-title']}>Created By</th>
                            <th className={styles['event-title']}>Status</th>
                            <th className={styles['event-title']}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentEventDatas.map((eventdata) => (
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
            <Pagination
                totalCount={filteredEventDatas.length}
                pageSize={PageSize}
                currentPage={currentPage}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}

export default EventPage;