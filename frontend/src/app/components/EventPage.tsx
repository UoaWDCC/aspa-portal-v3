import styles from './EventPage.module.css'



export default function EventPage() {
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
                        <tr>
                            <td> Event Title </td>
                            <td> 8/15/17 </td>
                            <td> Esther Howard </td>
                            <td> Upcoming</td>
                        </tr>
                    </tbody>
                </table>
            </div>







        </>
    )
}