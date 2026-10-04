import {
    Boolean,
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Text owner />
    <Text scope />
    <Boolean active />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
