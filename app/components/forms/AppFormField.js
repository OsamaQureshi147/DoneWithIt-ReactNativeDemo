import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'


import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({ name, ...props }) => {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                {...props}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})
