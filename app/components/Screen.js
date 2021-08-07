import React from 'react'
import {
    StyleSheet,
    Platform,
    StatusBar,
    SafeAreaView
} from 'react-native'

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
            {children}
        </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1
    },
})
