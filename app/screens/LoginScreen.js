import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'


import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import Screen from '../components/Screen'
import { loginValidationSchema } from '../utilities/helpers'
import ErrorMessage from '../components/ErrorMessage'



const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../assets/logo-red.png')}
                style={styles.icon}
            />
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={loginValidationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
                            placeholder="Email"
                            contentType="emailAddress"
                        // contentType is a platform dependent prop works only in iOS, it automatically adds email from keychain
                        />
                        <ErrorMessage error={errors.email} visible={touched.email} />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            onBlur={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}
                            secureTextEntry
                            contentType="password"
                        />
                        <ErrorMessage error={errors.password} visible={touched.password} />
                        <AppButton
                            title="Login"
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>

        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    icon: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    }
})
