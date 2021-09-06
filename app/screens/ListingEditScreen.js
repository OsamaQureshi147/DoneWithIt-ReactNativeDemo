import React from 'react';
import { StyleSheet } from 'react-native';
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms';
import Screen from '../components/Screen';
import { addListingValidationSchema } from '../utilities/helpers';


const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Camera', value: 3 }
];

const ListingEditScreen = () => {

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={addListingValidationSchema}
            >
                <AppFormField maxLength={255} name='title' placeholder='Title' />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    placeholder='Category'
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name='description'
                    placeholder='Description'
                    numberOfLines={3} //native api for android
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    );
}

export default ListingEditScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
})