import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        procedureVersion
        required
    />
    <Text assignedPerson />
    <Text subject />
    <DateTime dueDate />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
