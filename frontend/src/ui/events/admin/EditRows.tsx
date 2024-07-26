import React, { ChangeEvent } from "react"
import styles from './EditRows.module.css'

interface EditRowsProps {
    editFormData: {
        eventTitle: string;
        date: string;
        createdBy: string;
        status: string;
    };
    handleEditFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCancelClick: () => void;
}

const EditRows: React.FC<EditRowsProps> = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <>
            <tr>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="Enter Event Name"
                        name='eventTitle'
                        value={editFormData.eventTitle}
                        onChange={handleEditFormChange}
                    >
                    </input>
                </td>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="Enter the Date"
                        name='date'
                        value={editFormData.date}
                        onChange={handleEditFormChange}
                    >
                    </input>
                </td>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="Who is it created by"
                        name='createdBy'
                        value={editFormData.createdBy}
                        onChange={handleEditFormChange}
                    >
                    </input>
                </td>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="What the Status?"
                        name='status'
                        value={editFormData.status}
                        onChange={handleEditFormChange}
                    >
                    </input>
                </td>
                <td>
                    <button className={styles['save-button']} type="submit">Save</button>
                    <button className={styles['cancel-button']} type="button" onClick={handleCancelClick}>Cancel</button>
                </td>
            </tr>
        </>
    )
}

export default EditRows