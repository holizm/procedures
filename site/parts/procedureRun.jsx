import Item from 'item'
export default ({ procedureRun }) => <Item class='procedureRun'>
    <h2 class='title'>{procedureRun.procedureVersion?.procedure?.title}</h2>
    <time class='dueDate'>{procedureRun.dueDate}</time>
    <span class='state'>{procedureRun.state?.title}</span>
</Item>
