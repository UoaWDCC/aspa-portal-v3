import React from "react"

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

const ReadOnlyRow: React.FC<ReadOnlyRowProps> = ({ eventdata, handleEditClick }) => {
    return (
        <tr>
            <td>{eventdata.eventTitle}</td>
            <td>{eventdata.date}</td>
            <td>{eventdata.createdBy}</td>
            <td>{eventdata.status}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, eventdata)}> Edit </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;