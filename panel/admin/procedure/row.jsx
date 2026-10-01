export default item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.owner?.title}</td>
    <td>{item.scope}</td>
</>
