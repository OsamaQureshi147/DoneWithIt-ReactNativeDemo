import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import colors from '../../config/colors'
import AppText from '../AppText'



export const ListItem = ({ image, title, subTitle, onPress, renderRightActions, IconComponent }) => {
    return (
        <Swipeable renderRightActions={renderRightActions} >
            <TouchableHighlight underlayColor={colors.light} onPress={onPress} >
                <View style={styles.container} >
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer} >
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} >{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        color: colors.black,
        fontWeight: '600'
    },
    subTitle: {
        color: colors.medium
    }
})
