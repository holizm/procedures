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
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='owner'
        property='owner'
    />
    <Text
        placeholder='scope'
        property='scope'
    />
    <Boolean
        placeholder='active'
        property='active'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
