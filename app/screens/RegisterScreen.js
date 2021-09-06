import React from 'react'
import { StyleSheet } from 'react-native'


import Screen from '../components/Screen'
import { registerValidationSchema } from '../utilities/helpers'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={registerValidationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name='name'
                    placeholder="Name"
                // contentType is a platform dependent prop works only in iOS, it automatically adds email from keychain
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name='email'
                    placeholder="Email"
                    contentType="emailAddress"
                // contentType is a platform dependent prop works only in iOS, it automatically adds email from keychain
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name='password'
                    placeholder="Password"
                    secureTextEntry
                    contentType="password"
                />
                <SubmitButton title="Register" />

            </AppForm>

        </Screen>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})
