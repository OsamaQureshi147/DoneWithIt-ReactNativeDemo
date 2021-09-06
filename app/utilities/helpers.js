import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export const registerValidationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

export const addListingValidationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category')
});