import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Card
                title="Main title"
                subTitle="$100"
                image={require('../assets/jacket.jpeg')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 100,
    }
})
