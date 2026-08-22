export default ({ procedureRun }) => <article class='procedureRun'>
    <h2 class='title'>{procedureRun.procedureVersion?.procedure?.title}</h2>
    <time class='dueDate'>{procedureRun.dueDate}</time>
    <span class='state'>{procedureRun.state?.title}</span>
</article>
