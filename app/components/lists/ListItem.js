import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    TouchableHighlight
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
                        <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name='chevron-right' size={25} color={colors.medium} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1
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
