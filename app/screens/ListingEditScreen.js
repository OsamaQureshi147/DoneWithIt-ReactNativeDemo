import React from 'react';
import { StyleSheet } from 'react-native';

import CategoryPickerItem from '../components/CategoryPickerItem';
import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { useLocation } from '../hooks/useLocation';
import { addListingValidationSchema } from '../utilities/helpers';


const categories = [
    {
        backgroundColor: colors.red,
        icon: 'floor-lamp',
        label: 'Furniture',
        value: 1
    },
    {
        label: 'Cars',
        icon: 'car',
        backgroundColor: colors.orange,
        value: 2
    },
    {
        label: 'Cameras',
        icon: 'camera',
        backgroundColor: colors.yellow,
        value: 3
    },
    {
        label: 'Games',
        icon: 'cards',
        backgroundColor: colors.green,
        value: 4
    },
    {
        label: 'Clothing',
        icon: 'shoe-heel',
        backgroundColor: colors.cyan,
        value: 5
    },
    {
        label: 'Sports',
        icon: 'basketball',
        backgroundColor: colors.brightBlue,
        value: 6
    },
    {
        label: 'Movies & Music',
        icon: 'headphones',
        backgroundColor: colors.softBlue,
        value: 7
    },
    {
        label: 'Books',
        icon: 'book-open-variant',
        backgroundColor: colors.purple,
        value: 8
    },
    {
        label: 'Other',
        icon: 'folder-outline',
        backgroundColor: colors.grey,
        value: 9
    }
];

const ListingEditScreen = () => {
    const { location } = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(location)}
                validationSchema={addListingValidationSchema}
            >
                <AppFormImagePicker name='images' />
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
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
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