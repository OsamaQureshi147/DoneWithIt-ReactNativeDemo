import React from 'react'
import { Image, StyleSheet } from 'react-native'


import Screen from '../components/Screen'
import { loginValidationSchema } from '../utilities/helpers'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

export const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Image
                source={require('../assets/logo-red.png')}
                style={styles.icon}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={loginValidationSchema}
            >

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
                <SubmitButton title="Login" />

            </AppForm>

        </Screen>
    )
}

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
