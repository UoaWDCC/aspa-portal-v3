import React from "react"
import styles from "./ReadOnlyRow.module.css"

interface Event {
    id: number;
    eventTitle: string;
    date: string;
    createdBy: string;
    status: string;
}

interface ReadOnlyRowProps {
    eventdata: Event;
}

const ReadOnlyRow: React.FC<ReadOnlyRowProps> = ({ eventdata, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td className={styles['table-text']}>{eventdata.eventTitle}</td>
            <td className={styles['table-text']}>{eventdata.date}</td>
            <td className={styles['table-text']}>{eventdata.createdBy}</td>
            <td className={styles['table-text']}>{eventdata.status}</td>
            <td>
                <button className={styles['edit-button']} type="button" onClick={(event) => handleEditClick(event, eventdata)}> Edit </button>
                <button className={styles['delete-button']} type="button" onClick={() => handleDeleteClick(eventdata.id)}> Delete </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;