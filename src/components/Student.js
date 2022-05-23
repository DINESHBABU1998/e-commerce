import React from 'react'
import { Table } from 'react-bootstrap'
import './styles.css'

const Student = () => {
    return (
        <><h1>Students</h1>
            <Table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DineshBabu</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>EA9</td>
                        <td>edit</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Student