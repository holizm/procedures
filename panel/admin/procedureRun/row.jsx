import { DateTime } from 'list'

export default item => <>
    <td>{item.procedureVersion?.procedure?.title}</td>
    <td>{item.assignedPerson?.title}</td>
    <td>{item.subject?.title}</td>
    <DateTime value={item.dueDate} />
    <td>{item.state?.title}</td>
</>
