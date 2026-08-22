import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='proceduresProcedureVersion'
        property='procedureVersion'
        required
    />
    <Text
        placeholder='proceduresAssignedPerson'
        property='assignedPerson'
    />
    <Text
        placeholder='proceduresSubject'
        property='subject'
    />
    <DateTime
        placeholder='proceduresDueDate'
        property='dueDate'
    />
    <LongText
        placeholder='proceduresDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
