import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card';

import Screen from '../components/Screen'
import colors from '../config/colors';

const listings = [
    {
        id: "1",
        title: "Red Jacket for sale",
        price: 100,
        image: require('../assets/jacket.jpeg')
    },
    {
        id: "2",
        title: "Couch in good condition",
        price: 1000,
        image: require('../assets/couch.jpeg')
    }
];


const ListingsScreen = () => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={`$${item.price}`}
                        image={item.image}
                    />
                }
            />
        </Screen>
    )
}

export default ListingsScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
