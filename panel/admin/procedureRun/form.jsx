import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='procedureVersion'
        property='procedureVersion'
        required
    />
    <Text
        placeholder='assignedPerson'
        property='assignedPerson'
    />
    <Text
        placeholder='subject'
        property='subject'
    />
    <DateTime
        placeholder='dueDate'
        property='dueDate'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
