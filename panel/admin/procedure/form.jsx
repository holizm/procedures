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
        placeholder='proceduresCode'
        property='code'
        required
    />
    <Text
        placeholder='proceduresOwner'
        property='owner'
    />
    <Text
        placeholder='proceduresScope'
        property='scope'
    />
    <Boolean
        placeholder='proceduresActive'
        property='active'
    />
    <LongText
        placeholder='proceduresDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
