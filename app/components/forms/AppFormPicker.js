import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import { ErrorMessage } from './ErrorMessage';


export const AppFormPicker = ({
    items,
    name,
    numberOfColumns,
    placeholder,
    PickerItemComponent
}) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}
