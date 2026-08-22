import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>proceduresProcedure</th>
    <th>proceduresAssignedPerson</th>
    <th>proceduresSubject</th>
    <th>proceduresDueDate</th>
    <th>proceduresState</th>
</>

const row = item => <>
    <td>{item.procedureVersion?.procedure?.title}</td>
    <td>{item.assignedPerson?.title}</td>
    <td>{item.subject?.title}</td>
    <DateTime value={item.dueDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
