import React from "react"

const EditRows = () => {
    return (
        <>
            <tr>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="Enter Event Name"
                        name='eventTitle'
                    >
                    </input>
                </td>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="Enter the Date"
                        name='date'
                    >
                    </input>
                </td>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="Who is it created by"
                        name='createdBy'
                    >
                    </input>
                </td>
                <td>
                    <input
                        type="text"
                        required={true}
                        placeholder="What the Status?"
                        name='status'
                    >
                    </input>
                </td>
            </tr>
        </>
    )
}

export default EditRows