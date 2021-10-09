import React from 'react'
import { useFormikContext } from 'formik'
import ImageInputList from '../ImageInputList'
import { ErrorMessage } from './ErrorMessage'

const AppFormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name]

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri])
    }

    const handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
    }

    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormImagePicker

