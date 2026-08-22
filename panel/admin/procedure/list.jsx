import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>proceduresProcedure</th>
    <th>proceduresCode</th>
    <th>proceduresOwner</th>
    <th>proceduresScope</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.owner?.title}</td>
    <td>{item.scope}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
