import React from 'react'
import {
    StyleSheet,
    View,
    Image
} from 'react-native'

import { ListItem } from '../components/lists'
import AppText from '../components/AppText'
import colors from '../config/colors'

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpeg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} >Red Jacket for Sale</AppText>
                <AppText style={styles.price} >$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/osama.jpg')}
                        title="Osama Ehsan Qureshi"
                        subTitle="5 Listings"
                    />
                </View>

            </View>
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },

    image: {
        width: '100%',
        height: 300
    },

    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
        marginVertical: 10
    },

    title: {
        fontSize: 24,
        fontWeight: '500'
    },

    userContainer: {
        marginVertical: 40
    }
})
